import produce from 'immer'

const onSetDevices = (state, payload) => {
    state = payload

    return state
}

const onToggleDeviceLockState = (state, payload) => {
    let newState = ''

    // Find the correct device index
    const index = state.findIndex((ele) => payload.entity_id == ele.entity_id)

    if (state[index].state == 'locked') {
        newState = 'unlocked'
    } else {
        newState = 'locked'
    }

    state[index].state = newState

    return state
}

const onToggleDevicePowerState = (state, payload) => {
    let newState = ''

    // Find the correct device index
    const index = state.findIndex((ele) => payload.entity_id == ele.entity_id)

    if (state[index].state == 'on') {
        newState = 'off'
    } else {
        newState = 'on'
    }

    state[index].state = newState

    return state
}

const reducer = (state, {type, payload}) => {
    console.log('reducer called with type: ' + type + ' and payload:')
    console.log(payload)

    return produce(
        state,
        (draft) => {
            switch (type) {
            case 'SET_DEVICES':
                return onSetDevices(draft, payload)
            case 'TOGGLE_DEVICE_LOCK_STATE':
                return onToggleDeviceLockState(draft, payload)
            case 'TOGGLE_DEVICE_POWER_STATE':
                return onToggleDevicePowerState(draft, payload)
            }
        },
        (patches) => {
            patches.forEach((patch) => {
                console.log('reducer patch:')
                console.log(patch)
            })
        }
    )
}

export default reducer
