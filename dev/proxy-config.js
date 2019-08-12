if (!process.env.GRAPHITE_SERVER) {
    throw 'GRAPHITE_SERVER env var must be exported prior to running'
}

module.exports = {
    '/api': 'http://' + process.env.GRAPHITE_SERVER,
    '/api/websocket': {
        target: 'ws://' + process.env.GRAPHITE_SERVER,
        ws: true
    }
}
