module.exports = {
    // '/api': 'http://voltorb:8123',
    // '/api/websocket': {
    //     target: 'ws://voltorb:8123',
    //     ws: true
    // }
    '/api': process.env.GRAPHITE_SERVER
}
