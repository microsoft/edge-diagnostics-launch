var urlparse = require('url').parse
var urlformat = require('url').format
var child_process = require('child_process')
var path = require('path')
var os = require('os')

function launch (url, options, callback) {
  var args = []

  if (url && url.length) {
    var urlObj = urlparse(url, true)
    delete urlObj.search   // url.format does not want search attribute
    url = urlformat(urlObj)
    args.push('-l ' + url)
  }

  var command = path.resolve('node_modules', 'edge-diagnostics-adapter', 'dist', os.arch(), 'EdgeDiagnosticsAdapter.exe')

  return child_process.execFile(command, args, callback)
}

module.exports = launch
