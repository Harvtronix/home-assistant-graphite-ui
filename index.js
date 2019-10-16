const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware')
const proxyConfig = require('./proxy.config.js')

// Create the express server
const server = express()

// Set up all proxies from the proxyConfig file
for (let x in proxyConfig) {
    server.use(proxy(x, proxyConfig[x]))
}

// Serve the static files from the React app
server.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 6464

server.listen(port, () => {
    console.log(`\\{^_^}/ Graphite UI is running on port ${port}.`)
})
