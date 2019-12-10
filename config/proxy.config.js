if (!process.env.GRAPHITE_HA_SERVER) {
    throw 'GRAPHITE_HA_SERVER env var must be exported prior to running'
}

const secure = process.env.GRAPHITE_SECURE_PROXY ? 's' : ''
const uri = `${secure}://${process.env.GRAPHITE_HA_SERVER}`

module.exports = {
    '/api': {
        target: `http${uri}`
    },
    '/api/websocket': {
        target: `ws${uri}`,
        ws: true
    }
}
