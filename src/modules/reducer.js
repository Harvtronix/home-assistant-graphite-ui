import produce from 'immer'

const onToggleDevicePowerState = (state, payload) => {
    let newPowerState = ''

    if (state[payload.deviceId].powerState == 'ON') {
        newPowerState = 'OFF'

    } else {
        newPowerState = 'ON'
    }

    state[payload.deviceId].powerState = newPowerState

    return state
}

const reducer = (state, {type, payload}) => {
    console.log(
        '<> reducer (' + 'payload: ' + JSON.stringify(payload) + ')'
    )

    return produce(
        state,
        (draft) => {
            switch (type) {
            case 'TOGGLE_DEVICE_POWER_STATE':
                return onToggleDevicePowerState(draft, payload)
            }
        },
        (patches) => {
            patches.forEach((patch) => {
                console.log(patch)
            })
        }
    )
}

export default reducer
