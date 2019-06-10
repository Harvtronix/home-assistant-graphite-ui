const states = require('./db-states')
const services = require('./db-services')

const db  = {
    'states': states,
    'services': services
}

module.exports = () => (db)
