module.exports = {
    '/api': 'http://' + process.env.GRAPHITE_SERVER,
    '/api/websocket': {
        target: 'ws://' + process.env.GRAPHITE_SERVER,
        ws: true
    }
}
