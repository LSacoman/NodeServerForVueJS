const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const httpPort = 80

const app = express()
 
app.use(serveStatic(path.join(__dirname, 'dist')))
app.use('/*', serveStatic(path.join(__dirname, 'dist')))
app.listen(httpPort)
