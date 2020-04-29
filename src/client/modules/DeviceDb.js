import produce from 'immer'
import React from 'react'

import Api from '~/client/modules/Api'

import Constants from './Constants'

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
        return dispatch({ action, payload })
    }
}

const actions = {
    setDeviceState: createAction((state, payload) => {
        // Find the correct device index
        const index = state.findIndex((ele) => payload.entity_id === ele.entity_id)

        if (index >= 0) {
            state[index] = payload.new_state
        }
    }),

    setDevices: createAction((_, payload) => {
        return payload
    }),

    toggleDeviceLockState: createAction((state, payload) => {
        // Find the correct device index
        const index = state.findIndex((ele) => payload.entity_id === ele.entity_id)

        if (state[index].state === Constants.DeviceStates.LOCKED) {
            // do unlock
            Api.unlockDevice(payload.entity_id)
        } else {
            // This will cover both "unlocked" and "unknown" cases
            Api.lockDevice(payload.entity_id)
        }
    }),

    toggleDevicePowerState: createAction((_, payload) => {
        Api.toggleDevice(payload.entity_id)
    }),

    turnDeviceOn: createAction((state, payload) => {
        Api.turnDeviceOn(
            payload.entity_id,
            'brightness' in payload ? payload.brightness : undefined
        )
    })
}

const reducer = (state, { action, payload }) => {
    console.log('() reducer - Action and payload are:')
    console.log(action)
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
