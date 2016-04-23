var urlparse = require('url').parse
var urlformat = require('url').format
var child_process = require('child_process')
var path = require('path')
var os = require('os')

function launch(url, options, callback) {
  var args = []
  options = options || {}

  if (options.port) {
    args.push('--port', options.port);
  }

  if (url && url.length) {
    var urlObj = urlparse(url, true)
    delete urlObj.search   // url.format does not want search attribute
    url = urlformat(urlObj)
    args.push('-l ' + url)
  }

  var adapterPath = path.resolve('node_modules', 'edge-diagnostics-adapter', 'dist', os.arch(), 'EdgeDiagnosticsAdapter.exe')

  if (options.adapterPath) {
    adapterPath = options.adapterPath
  }

  var command = adapterPath
  var process = child_process.spawn(command, args)

  if (callback) {
    process.stdout.on('data', function(msg) {
      msg = (typeof msg === Buffer) ? msg.toString() : msg
      if (/Proxy server listening on port \d{4}/g.test(msg)) {
        callback(null)
      }
    })

    process.stderr.on('data', function(err) {
      callback(err)
    })
  }

  return process
}

module.exports = launch
