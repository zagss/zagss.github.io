const execSync = require('child_process').execSync

// 将打包后的文件移动
const log = console.log.bind(console)
const asset_path = 'dist/assets'
const html_path = 'dist/index.html'
const def_path = './'
const error_path = '404.html'

execSync('rm -rf ' + 'assets')

execSync(['mv', asset_path, def_path].join(' '))

execSync(['cp', html_path, error_path].join(' '))

execSync(['mv', html_path, def_path].join(' '))