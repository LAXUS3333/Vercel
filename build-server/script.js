const {exec} = require('child_process')
const path = require('path')
const fs = require('fs')


async function init() {

    console.log('Executing script.js...')
    const outDirPath = path.join(__dirname, 'output')

    const p = exec(`node ${outDirPath} && npm install && npm run build`)

    p.stdout.on('data', function(data) {
        console.log(data.toString())
    })

    p.stdout.on('error', function(data) {
        console.log('Error', data.toString())
    })

    p.on('close', function(code) {
        console.log('Built Complete')
        const distFolderPath = path.join(outDirPath, 'output')
        const distFolderContents = fs.readdirSync(distFolderPath, {recursive: true})
        
        for (const file of distFolderContents) {
            if (fs.lstatSync(filePath).isDirectory()) continue;
        }

    })

}