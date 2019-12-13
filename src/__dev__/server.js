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
server.post('/services/*/lock', (req, res, next) => {
    if (req.method !== 'POST') {
        next()
        return
    }

    // check if lock exists for entity domain
    const pathDomainPart = req.path.split('/')[2]
    const domainIndex = db.services.findIndex((ele) => (ele.domain == pathDomainPart))
    if (!('lock' in db.services[domainIndex].services)) {
        res.sendStatus(400)
        return
    }

    // check for entity_id property
    if (!('entity_id' in req.body)) {
        res.sendStatus(400)
        return
    }

    console.log('    Got a request to lock ' + req.body['entity_id'])

    toggleDeviceAndNotify(req.body.entity_id, res)
})

//===== Custom Routes =====//
server.post('/services/*/toggle', (req, res, next) => {
    if (req.method !== 'POST') {
        next()
        return
    }

    // check if toggle exists for entity domain
    const pathDomainPart = req.path.split('/')[2]
    const domainIndex = db.services.findIndex((ele) => (ele.domain == pathDomainPart))
    if (!('toggle' in db.services[domainIndex].services)) {
        res.sendStatus(400)
        return
    }

    // check for entity_id property
    if (!('entity_id' in req.body)) {
        res.sendStatus(400)
        return
    }

    console.log('    Got a request to toggle ' + req.body['entity_id'])

    toggleDeviceAndNotify(req.body.entity_id, res)
})

server.post('/services/*/unlock', (req, res, next) => {
    if (req.method !== 'POST') {
        next()
        return
    }

    // check if unlock exists for entity domain
    const pathDomainPart = req.path.split('/')[2]
    const domainIndex = db.services.findIndex((ele) => (ele.domain == pathDomainPart))
    if (!('unlock' in db.services[domainIndex].services)) {
        res.sendStatus(400)
        return
    }

    // check for entity_id property
    if (!('entity_id' in req.body)) {
        res.sendStatus(400)
        return
    }

    console.log('    Got a request to unlock ' + req.body['entity_id'])

    toggleDeviceAndNotify(req.body.entity_id, res)
})

/**
 * Helper function to toggle a device with a binary state. Supports locks and switches.
 *
 * @param {string} entity_id - Id of the entity to toggle.
 * @param {*} res - Outgoing response object.
 */
const toggleDeviceAndNotify = (entity_id, res) => {
    const states = db.states

    // find the entity in the db states
    const index = states.findIndex((ele) => entity_id == ele.entity_id)
    if (index < 0) {
        res.sendStatus(404)
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
        console.log('    Sending websocket message that state changed')
        websocket.send(JSON.stringify(wsMessages.createStateChangedMessage(oldState, newState)))
    }
}

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
