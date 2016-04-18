var launch = require('../index.js')

var edge = launch('http://microsoft.com', {})

edge.stdout.on('data', function(data) {
  console.log('edge.stdout', data)
})

edge.stderr.on('data', function(data) {
  console.log('edge.stderr', data)
})

edge.on('exit', function(code) {
  console.log('Edge has excited with code', code)
})
