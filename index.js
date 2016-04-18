var urlparse = require('url').parse
var urlformat = require('url').format
var child_process = require('child_process')
var path = require('path')
var os = require('os')


function launch(url, options, callback) {
  var args = []

  // If URL is present, pass it to adaptor that starts Edge with the URL
  if(url && url.length) {
    var urlObj = urlparse(url, true)
    delete urlObj.search   // url.format does not want search attribute
    url = urlformat(urlObj)
    args.push('-l ' + url)
  }
  
  // Fire up process
  var command = path.resolve(__dirname, '..', 'node_modules', 'edge-diagnostics-adapter', 'dist', os.arch(), 'EdgeDiagnosticsAdapter.exe')  
  var adaptorProcess = child_process.execFile(command, args, callback)

  process.on('exit', function(code) {
    adaptorProcess.kill()
  })

  return process
}

module.exports = launch