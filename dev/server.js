const path = require('path')
const jsonServer = require('json-server')
const db = require(path.join(__dirname, 'db.js'))()

const server = jsonServer.create()
const router = jsonServer.router(db, 'entity_id')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))

//===== Custom Routes =====//
server.use('/services/switch/toggle', (req, res, next) => {
    if (req.method !== 'POST') {
        next()
    }

    console.log('got a request to toggle a light')
    res.sendStatus(204)
})
//===== End Custom Routes =====//

// Everything in the json-server runs under /api
server.use(router)

server.listen(3000, () => {
    console.log('\\{^_^}/ JSON Server is running.')
})
