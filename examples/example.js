var launch = require('../index.js')

var edge = launch('http://microsoft.com', {}, function(err) {
  
  if (err) {
    console.log('Something went wrong when starting Edge', err)
  } else {
    console.log('Edge launched. Go connect')
  }
  
})

edge.on('exit', function(code) {
  console.log('Edge has exited with code', code)
})
