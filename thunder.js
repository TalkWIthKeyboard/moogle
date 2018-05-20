const cp = require('child_process')
const path = require('path')
const alfy = require('alfy')

try {
    cp.spawnSync('pbcopy', {
        encoding: 'utf8',
        input: alfy.input,
    })
    cp.execSync(`/usr/bin/osascript ${path.join(__dirname, 'openThunder.scpt')}`)
} catch (err) {
    console.log(err)
}