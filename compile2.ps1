node -e "require('fs').copyFileSync(process.execPath, 'app_onNode.exe')"
node --experimental-sea-config sea-config.json
signtool remove /s app_onNode.exe
npx postject app_onNode.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2 
