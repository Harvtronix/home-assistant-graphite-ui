import produce from 'immer'
import React from 'react'

import Api from '~/client/modules/Api'

/**
 * The actual context that backs the device database.
 */
const Context = React.createContext([])

/**
 * The actual dispatch function returned by the eventual call to useReducer. This is registered
 * with this module via `setDispatch()`.
 */
let dispatch = null

/**
 * Method to create a reducer action from a given function.
 *
 * @param {Function} action - Function to be called by the dispatcher with a given payload.
 */
const createAction = (action) => {
    return (payload) => {
        return dispatch({action, payload})
    }
}

const actions = {
    setDeviceState: createAction((state, payload) => {
        // Find the correct device index
        const index = state.findIndex((ele) => payload.entity_id == ele.entity_id)

        if (index >= 0) {
            state[index] = payload.new_state
        }
    }),

    setDevices: createAction((state, payload) => {
        state = payload
        return state
    }),

    toggleDeviceLockState: createAction((state, payload) => {
        let newState = ''

        // Find the correct device index
        const index = state.findIndex((ele) => payload.entity_id == ele.entity_id)

        if (state[index].state == 'locked') {
            newState = 'unlocked'
        } else {
            newState = 'locked'
        }

        state[index].state = newState
    }),

    toggleDevicePowerState: createAction((_, payload) => {
        Api.toggleDevice(payload.entity_id)
    })
}

const reducer = (state, {action, payload}) => {
    console.log('reducer called with action: ' + action + ' and payload:')
    console.log(payload)

    return produce(
        state,
        (draft) => {
            return action(draft, payload)
        },
        (patches) => {
            patches.forEach((patch) => {
                console.log('reducer patch:')
                console.log(patch)
            })
        }
    )
}

const setDispatch = (incomingDispatchFunction) => {
    dispatch = incomingDispatchFunction
}

export default {
    Context,
    actions,
    reducer,
    setDispatch
}
