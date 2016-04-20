# edge-diagnostics-launch
Launcher for Microsoft Edge Diagnostics Adapter to make it simpler to start an instance of the Edge with diagnostics enabled.

## Installation
`npm install edge-diagnostics-launch`

## Options
No options for now.

## Usage

```javascript
var launch = require('edge-diagnostics-launch')
var options = {
  adapterPath: '' // Optional, override adaptor path
}

// launch(<url>, <options>, callback)
var edge = launch('http://microsoft.com', options, function(err) {
  
  if (err) {
    console.log('Something went wrong when starting Edge', err)
  } else {
    console.log('Edge launched. Go connect')
  }
  
})

edge.on('exit', function(code) {
  console.log('Edge has excited with code', code)
})

// stdout + stderr streams from adaptor
edge.stdout.on('data', function(data) {
  console.log('edge.stdout', data)
})

edge.stderr.on('data', function(data) {
  console.log('edge.stderr', data)
})

```

## License

MIT.
