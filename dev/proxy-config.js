if (!process.env.GRAPHITE_SERVER) {
    throw 'GRAPHITE_SERVER env var must be exported prior to running'
}

const secure = process.env.GRAPHITE_SECURE_PROXY && 's'
const uri = `${secure}://${process.env.GRAPHITE_SERVER}`

module.exports = {
    '/api': `http${uri}`,
    '/api/websocket': {
        target: `ws${uri}`,
        ws: true
    }
}
