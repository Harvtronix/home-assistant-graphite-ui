const states = require('./db-states')
const services = require('./db-services')

const db  = {
    states,
    services
}

module.exports = () => (db)
