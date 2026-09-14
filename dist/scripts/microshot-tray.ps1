param(
    [string]$IconPath = ""
)

$ErrorActionPreference = 'Stop'

$formsAssemblyPath = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\System.Windows.Forms.dll'
$drawingAssemblyPath = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\System.Drawing.dll'
if (-not (Test-Path $formsAssemblyPath)) {
    $formsAssemblyPath = Join-Path $env:WINDIR 'Microsoft.NET\Framework\v4.0.30319\System.Windows.Forms.dll'
    $drawingAssemblyPath = Join-Path $env:WINDIR 'Microsoft.NET\Framework\v4.0.30319\System.Drawing.dll'
}
if (-not (Test-Path $formsAssemblyPath) -or -not (Test-Path $drawingAssemblyPath)) {
    [Console]::Error.WriteLine('System.Windows.Forms is not available; tray helper disabled.')
    exit 2
}

Add-Type -Path $formsAssemblyPath
Add-Type -Path $drawingAssemblyPath

Add-Type -ReferencedAssemblies $formsAssemblyPath, $drawingAssemblyPath -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
using System.Windows.Forms;

public class MicroShotHotkeyWindow : Form
{
    public const int WM_HOTKEY = 0x0312;
    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool RegisterHotKey(IntPtr hWnd, int id, uint fsModifiers, uint vk);
    [DllImport("user32.dll", SetLastError = true)]
    public static extern bool UnregisterHotKey(IntPtr hWnd, int id);

    public event Action<int> HotkeyPressed;

    protected override void WndProc(ref Message message)
    {
        if (message.Msg == WM_HOTKEY)
        {
            if (HotkeyPressed != null)
            {
                HotkeyPressed(message.WParam.ToInt32());
            }
        }
        base.WndProc(ref message);
    }
}
"@

function Send-Command([string]$Command) {
    [Console]::Out.WriteLine($Command)
    [Console]::Out.Flush()
}

$form = New-Object MicroShotHotkeyWindow
$form.ShowInTaskbar = $false
$form.WindowState = [System.Windows.Forms.FormWindowState]::Minimized
$form.Opacity = 0
$form.Add_Shown({ $form.Hide() })

$menu = New-Object System.Windows.Forms.ContextMenuStrip
$captureItem = $menu.Items.Add("Capture")
$startItem = $menu.Items.Add("Start auto diff")
$stopItem = $menu.Items.Add("Stop auto diff")
[void]$menu.Items.Add("-")
$exitItem = $menu.Items.Add("Exit")

$captureItem.Add_Click({ Send-Command "capture" })
$startItem.Add_Click({ Send-Command "start" })
$stopItem.Add_Click({ Send-Command "stop" })
$exitItem.Add_Click({ Send-Command "exit"; $form.Close() })

$notifyIcon = New-Object System.Windows.Forms.NotifyIcon
$notifyIcon.Text = "microShot"
$notifyIcon.ContextMenuStrip = $menu
$notifyIcon.Visible = $true
if ($IconPath -and (Test-Path $IconPath)) {
    $notifyIcon.Icon = [System.Drawing.Icon]::ExtractAssociatedIcon($IconPath)
} else {
    $notifyIcon.Icon = [System.Drawing.SystemIcons]::Application
}

$hotkeys = @(
    @{ Id = 1; Modifiers = 0x0002 -bor 0x0001; Key = 0x79; Command = "start" },
    @{ Id = 2; Modifiers = 0x0002 -bor 0x0001; Key = 0x78; Command = "stop" },
    @{ Id = 3; Modifiers = 0x0002 -bor 0x0001; Key = 0x2C; Command = "capture" }
)

foreach ($hotkey in $hotkeys) {
    if (-not [MicroShotHotkeyWindow]::RegisterHotKey($form.Handle, $hotkey.Id, $hotkey.Modifiers, $hotkey.Key)) {
        [Console]::Error.WriteLine("Could not register hotkey id $($hotkey.Id)")
    }
}

$form.add_HotkeyPressed({
    param($id)
    $hotkey = $hotkeys | Where-Object { $_.Id -eq $id }
    if ($hotkey) { Send-Command $hotkey.Command }
})

try {
    [System.Windows.Forms.Application]::Run($form)
} finally {
    foreach ($hotkey in $hotkeys) {
        [MicroShotHotkeyWindow]::UnregisterHotKey($form.Handle, $hotkey.Id) | Out-Null
    }
    $notifyIcon.Visible = $false
    $notifyIcon.Dispose()
    $menu.Dispose()
    $form.Dispose()
}
