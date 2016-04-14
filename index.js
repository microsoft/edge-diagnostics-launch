var urlparse = require('url').parse
var urlformat = require('url').format
var child_process = require('child_process')
var path = require('path')

function launch(url, options, callback) {
  var params = []

  // If URL is present, pass it to adaptor that starts Edge with the URL
  if(url && url.length) {
    var urlObj = urlparse(url, true)
    delete urlObj.search   // url.format does not want search attribute
    url = urlformat(urlObj)
    params.push('-l ' + url)
  }
  
  // Fire up process
  var adaptorPath = path.join(__dirname, 'bin', 'EdgeDiagnosticsAdapter.exe')
  var command = adaptorPath
  var adaptorProcess = child_process.execFile(command, params, callback)

  process.on('exit', function(code) {
    adaptorProcess.kill()
  })

  return process
}

module.exports = launch