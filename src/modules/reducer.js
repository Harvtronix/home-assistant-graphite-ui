import produce from 'immer'

const onToggleDevicePowerState = (state, payload) => {
    console.log(state)
    console.log(payload)
    let newPowerState = ''

    if (state[payload.deviceId].powerState == 'ON') {
        newPowerState = 'OFF'

    } else {
        newPowerState = 'ON'
    }

    return produce(state, (draftState) => {
        draftState[payload.deviceId].powerState = newPowerState
    })
}

const reducer = (state, {type, payload}) => {
    switch (type) {
    case 'TOGGLE_DEVICE_POWER_STATE':
        return onToggleDevicePowerState(state, payload)
    }
}

export default reducer
