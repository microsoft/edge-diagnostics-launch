var launch = require('../index.js')

launch('http://microsoft.com', {}, function(err) {
  if(err) {
    console.error('an error occured', err)
  } else {
    console.log('data', arguments)
  }
})
console.log('something after')
