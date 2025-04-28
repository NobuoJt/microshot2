import * as fs from "fs";
import { existsSync, mkdir, mkdirSync, readFileSync } from "fs";
import { createRequire } from "module";
const requireFromDisk = createRequire(__filename);
import packageJson from "./package.json"
import { stdin } from "process";
import lc from "console-log-colors"

//import { screenshots } from 'node-screenshots';
const screenshots = requireFromDisk(__dirname+'\\node_modules\\node-screenshots\\index.js');

//import { GlobalKeyboardListener } from 'node-global-key-listener';
const GlobalKeyboardListener = requireFromDisk(__dirname+'\\node_modules\\node-global-key-listener\\build\\index.js');
//import looksSame from 'looks-same';
const looksSame =requireFromDisk(__dirname+'\\node_modules\\looks-same\\index.js');

const version=packageJson.version


let prevImage=new Map();

interface config {"DISCORD_POST_URL":string,"TARGET_WINDOW":{"ONE_SHOT":string[],"AUTO":string[]},"TOLERANCE":number}

let configObj:config=JSON.parse(readFileSync(__dirname+'\\.secret.json').toString())//.secret.jsonの読み込み
load()

function load(){
    console.log(lc.yellowBG(" ")+lc.italic(` microShot v${version} `+lc.yellowBG(" "))+lc.gray(" nobuoJT"))
    console.log(lc.blue("\n (On console) Key input "))
    console.log("'l' : print window List.\n'L' : print window table.\n'r' : reload .secret.json and reInit \n'exit' : exit.")
    console.log(lc.blue("\n (Global) Key input"))
    console.log("'R Ctrl' : Capture.\n'F10' : start auto diff notice. 'F9' : stop.")
    console.log("")
    configObj=JSON.parse(readFileSync(__dirname+'\\.secret.json').toString())//.secret.jsonの読み込み
}

const URL=configObj?.DISCORD_POST_URL

let windows = screenshots.Window.all();
const keyboard = new GlobalKeyboardListener.GlobalKeyboardListener();
let auto_diff_flag=false


//説明

//標準入力割り込み
stdin.addListener("data",(e)=>{
    if (e?.toString().match("L")){///L ウィンドウリストの表示
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
    }
    if (e?.toString().match("l")){///l アプリ名のみ
        windows.forEach((item:any) => {
            console.log({
                appName: item.appName,
            });
        });
    }
    if (e?.toString().match(/exit/gi)){///exit 終了
        console.log('stdin:"exit" detected , exiting...');
        process.exit();
    }
    if (e?.toString().match(/r/gi)){//reload .secret
        load()
        console.log(".secret.json reloaded")
    }
    //console.log(e?.toString())
});

//キーボードイベント割り込み(フォーカス無視)
keyboard.addListener((event:any) => {
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
                    result = await looksSame(prevImage.get(i),image.toPngSync(),{tolerance:configObj?.TOLERANCE,ignoreAntialiasing:false,antialiasingTolerance:3})
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