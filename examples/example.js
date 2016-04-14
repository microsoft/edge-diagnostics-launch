var edgeDiagnosticsLaunch = require('../index.js')

edgeDiagnosticsLaunch('http://kenneth.io', {}, function(err) {
  if(err) {
    console.error('an error occured', err)
  } else {
    console.log('data', arguments)
  }
})
console.log('something after')