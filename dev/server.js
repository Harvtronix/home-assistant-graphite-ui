const path = require('path')
const jsonServer = require('json-server')
const db = require(path.join(__dirname, 'db.js'))()
const wsMessages = require(path.join(__dirname, 'ws-messages.js'))

const server = jsonServer.create()
const router = jsonServer.router(db, 'entity_id')
const middlewares = jsonServer.defaults()

let websocket = null

require('express-ws')(server)

// Use default express middlewares
server.use(middlewares)

// Allow request bodies to be parsed into req.body
server.use(jsonServer.bodyParser)

// Everything in the json-server runs under /api
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))

//===== Custom Routes =====//
server.use('/services/*/toggle', (req, res, next) => {
    if (req.method !== 'POST') {
        next()
        return
    }

    if (!('entity_id' in req.body)) {
        req.sendStatus(400)
        return
    }

    console.log('    Got a request to toggle ' + req.body['entity_id'])

    const entity_id = req.body.entity_id
    const states = db.states

    // find the entity in the db states
    const index = states.findIndex((ele) => entity_id == ele.entity_id)
    if (index < 0) {
        req.sendStatus(404)
        return
    }

    const entity = states[index]

    // make old and new states
    const oldState = { ...entity }
    switch (oldState.state) {
    case 'on':
        entity.state = 'off'
        break
    case 'off':
        entity.state = 'on'
        break
    case 'locked':
        entity.state = 'unlocked'
        break
    case 'unlocked':
        entity.state = 'locked'
        break
    }
    const newState = { ...entity }

    res.sendStatus(204)

    if (websocket != null) {
        websocket.send(JSON.stringify(wsMessages.createStateChangedMessage(oldState, newState)))
    }
})

server.ws('/websocket', (ws, req) => {
    console.log('WebSocket connection established to ' + req._remoteAddress)
    websocket = ws

    // websocket.on('message', (msg) => {
    //     console.log('WS message received: ' + msg)
    // })
})
//===== End Custom Routes =====//

server.use(router)

server.listen(3000, () => {
    console.log('\\{^_^}/ JSON Server is running.')
})
