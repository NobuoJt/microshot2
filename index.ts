import * as fs from "fs";
import { existsSync, mkdir, mkdirSync, readFileSync } from "fs";
import { createRequire } from "module";
const requireFromDisk = createRequire(__filename);
import packageJson from "./package.json"

//import { screenshots } from 'node-screenshots';
const screenshots = requireFromDisk('C:\\Users\\user\\Desktop\\開発\\microShot\\node_modules\\node-screenshots\\index.js');

import { GlobalKeyboardListener } from 'node-global-key-listener';
//const keyboardListener = requireFromDisk('C:\\Users\\user\\Desktop\\開発\\microShot\\node_modules\\node-global-key-listener\\build\\index.js');
import looksSame from 'looks-same';
//const looksSame =requireFromDisk('C:\\Users\\user\\Desktop\\開発\\microShot\\node_modules\\looks-same\\index.js');

const version=packageJson.version


let prevImage=new Map();

interface config {"DISCORD_POST_URL":string,"TARGET_WINDOW":{"ONE_SHOT":string[],"AUTO":string[]}}

const configObj:config=JSON.parse(fs.readFileSync(__dirname+"/.secret.json").toString())

const URL=configObj?.DISCORD_POST_URL

let windows = screenshots.Window.all();
const keyboard = new GlobalKeyboardListener();
let auto_diff_flag=false

console.log(`microShot v${version}`)
console.log("'L' key to print window List.\n'R Ctrl' to Capture.\n'F10' to start auto diff notice. 'F9' to stop.\n'Esc' to exit.")
//説明


keyboard.addListener((event:any) => {//キーボードイベント割り込み(フォーカス無視)
    if (event.name === 'ESCAPE' && event.state === 'DOWN') {
        console.log('Esc key pressed, exiting...');
        process.exit();
    }
    if (event.name === 'L' && event.state === 'DOWN') {//L ウィンドウリストの表示
        windows.forEach((item:any) => {
            console.table({
                id: item.id,
                appName: item.appName,
                title: item.title,
                currentMonitor: item.currentMonitor.id,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height,
                //rotation: item.rotation,
                //scaleFactor: item.scaleFactor,
                //isPrimary: item.isPrimary,
                isMinimized: item.isMinimized,
                isMaximized: item.isMaximized,
            });
        });
        
        windows.forEach((item:any) => {//アプリ名のみ
            console.log({
                appName: item.appName,
            });
        });
    }
    let date=new Date()
    if (event.name === 'RIGHT CTRL' && event.state === 'DOWN') {//右コントロール　スクショ

        configObj?.TARGET_WINDOW?.ONE_SHOT?.forEach((tg_window)=>{
            windows.forEach((item:any) => {
                if(item.appName==tg_window){
                    let image=item.captureImageSync()
                    let filename = `${__dirname}/pix/${item.appName}_${date.toLocaleString().replace(/\//g,"_").replace(/:/g,"_")}.png`
                    if(!fs.existsSync(`${__dirname}/pix`)){fs.mkdirSync(`${__dirname}/pix`)}
                    fs.writeFileSync(filename, image.toPngSync());//pix以下に保存
                    console.log("saved "+filename)
                }
            });
        })
    }

    if (event.name === 'F10' && event.state === 'DOWN') {//F10
        auto_diff_flag=true
        console.log("auto_diff_flag=true")
    }
    if (event.name === 'F9' && event.state === 'DOWN') {//F9
        auto_diff_flag=false
        console.log("auto_diff_flag=false")
    }
});


setInterval(() => {
    if(!auto_diff_flag){return}
    
    configObj?.TARGET_WINDOW?.AUTO?.forEach((tg_window)=>{
        windows.forEach(async (item:any,i:Number) => {
            
            if(item.appName==tg_window){
                let image=item.captureImageSync()
                let result
                if(prevImage.get(i)!==undefined){
                    result = await looksSame(prevImage.get(i),image.toPngSync()),{tolerance:5}
                    if(!result?.equal){
                        try{
                            const formData = new FormData()
                            formData.append('file', new Blob([image.toPngSync()], { type: 'image/png' }), 'file.png')
                            const response = await fetch(URL, {
                                method: 'POST',
                                body: formData
                            });
                        } catch (error) {console.error(error)}
                    }
                }
                prevImage.set(i,image.toPngSync())
                
            }
        });
    })
}, 5000);