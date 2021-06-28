if (!process.env.GRAPHITE_HA_SERVER) {
    throw new Error('GRAPHITE_HA_SERVER env var must be exported prior to running')
}
if (!process.env.GRAPHITE_HA_AUTH_TOKEN) {
    throw new Error('GRAPHITE_HA_AUTH_TOKEN env var must be exported prior to running')
}

const secure = process.env.GRAPHITE_SECURE_PROXY ? 's' : ''
const uri = `${secure}://${process.env.GRAPHITE_HA_SERVER}`

module.exports = {
    '/api': {
        target: `http${uri}`,
        onProxyReq: (proxyReq) => {
            proxyReq.setHeader('Authorization', `Bearer ${process.env.GRAPHITE_HA_AUTH_TOKEN}`)
        }
    },
    '/api/websocket': {
        target: `ws${uri}`,
        ws: true
    },
    '/token': {
        target: `http${uri}`,
        selfHandleRespone: true,
        onProxyRes: (proxyRes, req, res) => {
            res.send({
                token: process.env.GRAPHITE_HA_AUTH_TOKEN
            })
            res.end()
        }
    }
}
