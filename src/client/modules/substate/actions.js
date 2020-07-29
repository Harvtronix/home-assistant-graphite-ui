import Substate from 'react-substate'

import Api from '../Api'
import Constants from '../Constants'
import substates from './substates'

const actions = {
    updatePageTitle: Substate.createAction(substates.pageTitle, (draft, payload) => {
        return payload
    }),
    deviceDb: {
        setDeviceState: Substate.createAction(substates.deviceDb, (state, payload) => {
            // Find the correct device index
            const index = state.findIndex((ele) => payload.entity_id === ele.entity_id)

            if (index >= 0) {
                state[index] = payload.new_state
            }
        }),

        setDevices: Substate.createAction(substates.deviceDb, (_, payload) => {
            return payload
        }),

        toggleDeviceLockState: Substate.createAction(substates.deviceDb, (state, payload) => {
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

        toggleDevicePowerState: Substate.createAction(substates.deviceDb, (_, payload) => {
            Api.toggleDevice(payload.entity_id)
        }),

        turnDeviceOn: Substate.createAction(substates.deviceDb, (_, payload) => {
            Api.turnDeviceOn(
                payload.entity_id,
                'brightness' in payload ? payload.brightness : undefined
            )
        })
    }
}

export default actions
