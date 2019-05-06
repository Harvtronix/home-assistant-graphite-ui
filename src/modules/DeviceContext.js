import React from 'react'

const testDevices = {
    a: {
        deviceId: 'a',
        powerState: 'ON',
        deviceName: 'Bedroom Lights'
    },
    b: {
        deviceId: 'b',
        powerState: 'OFF',
        deviceName: 'Office Lights'
    },
    c: {
        deviceId: 'c',
        powerState: 'OFF',
        deviceName: 'Porch Lights'
    },
    d: {
        deviceId: 'd',
        powerState: 'ON',
        deviceName: 'Living Room Lights'
    }
}

const DeviceContext = React.createContext(testDevices)

export default DeviceContext
export { testDevices }
