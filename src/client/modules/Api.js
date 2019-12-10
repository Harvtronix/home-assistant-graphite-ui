import axiosFactory from 'axios'

const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0MzY3MTU4NmJlYzA0YTJhYjkyNjI' +
    '4MDA3Y2E1M2RlYSIsImlhdCI6MTU1NzE4OTk2NywiZXhwIjoxODcyNTQ5OTY3fQ.6L7aj4-jqIIA6W6jEf3IVsEjm3d1' +
    'XOHek4dpAIfb3qs'

const axios = axiosFactory.create({
    headers: {
        'Authorization': 'Bearer ' + authToken
    }
})

const EntityTypes = Object.freeze({
    AUTOMATION: 'automation.graphite',
    LIGHT: 'light',
    LOCK: 'lock',
    ROUTINE: 'script.graphite',
    SWITCH: 'switch',
    ZWAVE: 'zwave'
})

const toggleableDevices = Object.freeze([
    EntityTypes.LIGHT,
    EntityTypes.LOCK,
    EntityTypes.SWITCH
])

let ws = null
let wsReconnectTimeout = null

let lastStates = []

/**
 * Lists entities of particular types from the last server data. The types are values from the
 * `EntityTypes` object.
 *
 * @param {Array} typesToInclude - List of types to include in the result.
 * @returns {Array} A list of devices.
 */
const getEntitiesByType = (typesToInclude) => {
    // Return only devices that match an included type from typesToInclude
    const devices = lastStates.filter((entity) => (
        typesToInclude.findIndex((type) => (
            entity.entity_id.split('.')[0] == type
        )) >= 0
    ))

    devices.sort((a, b) => {
        return a.attributes.friendly_name.localeCompare(b.attributes.friendly_name)
    })

    console.log('getEntitiesByType(' + typesToInclude + ') returning:')
    console.log(devices)

    return devices
}

/**
 * Lists entities from the last server data that are considered to be "devices" because of their
 * "type".
 *
 * @returns {Array} A list of device entities.
 */
const getDevices = () => {
    return getEntitiesByType([
        EntityTypes.LIGHT,
        EntityTypes.LOCK,
        EntityTypes.SWITCH
    ])
}

const openWebsocket = (eventCallback) => {
    let protocol = location.protocol.startsWith('https') ? 'wss://' : 'ws://'
    try {
        ws = new WebSocket(protocol + location.host + '/api/websocket')
    } catch (e) {
        console.error('Unable to open websocket: ' + e)
        return
    }

    ws.onopen = () => {
        console.log('Websocket connection established')
    }

    ws.onmessage = (messageEvent) => {
        const message = JSON.parse(messageEvent.data)

        if (message.type == 'auth_required') {
            ws.send(JSON.stringify({
                type: 'auth',
                access_token: authToken
            }))
        }

        if (message.type == 'auth_ok') {
            ws.send(JSON.stringify({
                id: 111,
                type: 'subscribe_events',
                event_type: 'state_changed'
            }))
        }

        if (message.type == 'event') {
            eventCallback(message.event.data)
        }
    }

    ws.ondead = () => {
        if (wsReconnectTimeout == null) {
            console.log('Websocket is dead. Reconnecting in 5 seconds...')

            wsReconnectTimeout = setTimeout(() => {
                wsReconnectTimeout = null
                if (!ws || (ws && ws.readyState != WebSocket.OPEN)) {
                    openWebsocket(eventCallback)
                }
            }, 5000)
        }
    }

    ws.onclose = ws.ondead
    ws.onerror = ws.ondead
}

/**
 * @returns {Promise} - A promise that resolves after the latest states have been obtained from the
 * server.
 */
const refreshStates = () => {
    return new Promise((resolve, reject) => {
        // Grab data from the server and resolve (or reject) the promise
        axios.get('/api/states').then(
            (response) => {
                lastStates = response.data
                console.log('refreshStates obtained:')
                console.log(lastStates)
                resolve()
            },
            (error) => {
                reject(error)
            }
        )

        //script/script.1535436271565
        axios.get('/api/services').then((response) => {
            console.log('AVAILABLE SERVICES:')
            console.log(response.data)
        })
    })
}

const toggleDevice = (entityId) => {
    const deviceService = entityId.split('.')[0]

    if (toggleableDevices.indexOf(deviceService) < 0) {
        throw 'Attempted to toggle non-toggleable device of type ' + deviceService
    } else {
        console.log('Toggling device ' + entityId + ' via service ' + deviceService)
    }

    return new Promise((resolve, reject) => {
        // Execute the command and resolve (or reject) the promise
        axios.post('/api/services/' + deviceService + '/toggle', {
            entity_id: entityId
        }).then(
            (response) => {
                resolve(response)
            },
            (error) => {
                reject(error)
            }
        )
    })
}

export default {
    EntityTypes,
    getDevices,
    openWebsocket,
    refreshStates,
    toggleDevice
}

/*
what services are available?
    /api/services
    ex. domain: script

details of a script? (also how to update??)
    GET/POST /api/config/script/config/{script-id}
    seems like you can make up your own script-id for a new one, though they
    are using unix timestamps for theirs

what scripts are available?
    /states
    entity_id starts with "script."
    also: /api/services and look under domain:script for list of "services"

*/
