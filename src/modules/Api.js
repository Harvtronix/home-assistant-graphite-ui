import axiosFactory from 'axios'

const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0MzY3MTU4NmJlYzA0YTJhYjkyNjI' +
    '4MDA3Y2E1M2RlYSIsImlhdCI6MTU1NzE4OTk2NywiZXhwIjoxODcyNTQ5OTY3fQ.6L7aj4-jqIIA6W6jEf3IVsEjm3d1' +
    'XOHek4dpAIfb3qs'

const axios = axiosFactory.create({
    headers: {
        'Authorization': 'Bearer ' + authToken
    }
})

const includedDeviceTypes = [
    'light',
    'switch'
]

/**
 * Lists devices from the server and then calls callback passing the result set as an argument.
 *
 * @param {Function} callback - The callback to be executed upon success.
 */
const listDevices = (callback) => {
    axios.get('/api/states')
        .then((response) => {

            // Return only devices that match an included type from includedDeviceTypes
            const devices = response.data.filter((entity) => (
                includedDeviceTypes.findIndex((type) => (
                    entity.entity_id.split('.')[0] == type
                )) >= 0
            ))

            devices.sort((a, b) => {
                return a.attributes.friendly_name.localeCompare(b.attributes.friendly_name)
            })

            console.log('listDevices returning:')
            console.log(devices)

            if (callback) {
                callback(devices)
            }
        })
}
export default {
    listDevices
}
