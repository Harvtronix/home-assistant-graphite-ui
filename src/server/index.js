const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware')
const proxyConfig = require('../../config/proxy.config.js')

// Create the express server
const server = express()

// Save the path to the top-level index file for later
const indexFile = path.join(__dirname, '..', '..', 'dist', 'index.html')

// Set up all proxies from the proxyConfig file
for (const x in proxyConfig) {
    server.use(proxy(x, proxyConfig[x]))
}

// Serve the index file for BrowserRouter routes
const indexRoutes = [
    /^\/devices\/?/
]
server.get(indexRoutes, (req, res) => {
    res.sendFile(indexFile)
})

// Serve the static files from the React app
server.use(express.static(path.join(__dirname, '..', '..', 'dist')))

const port = process.env.PORT || 6464

server.listen(port, () => {
    console.log(`\\{^_^}/ Graphite UI is running on port ${port}.`)
})
