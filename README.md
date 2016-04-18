# edge-diagnostics-launch
Launcher for Microsoft Edge Diagnostics Adapter to make it simpler to start an instance of the Edge with diagnostics enabled.

## Installation
`npm install edge-diagnostics-launch`

## Options
No options for now.

## Usage
```javascript
var launch = require('edge-diagnostics-launch')
var options = {}

// launch(<url>, <options>, callback)
var edge = launch('http://microsoft.com', options)

edge.stdout.on('data', function(data) {
  console.log('edge.stdout', data)
})

edge.stderr.on('data', function(data) {
  console.log('edge.stderr', data)
})

edge.on('exit', function(code) {
  console.log('Edge has excited with code', code)
})
```

## License

MIT.
