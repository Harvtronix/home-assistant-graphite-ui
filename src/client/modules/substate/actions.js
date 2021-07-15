import { createAction } from 'react-substate'

import Api from '../Api'
import Constants from '../Constants'

const actions = {
    updatePageTitle: createAction((draft, payload) => {
        return payload
    }),
    deviceDb: {
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
            const index = state.findIndex((ele) => payload.entity_id === ele.entity_id)
            const currentLockState = state[index].state

            // Set the device state to loading
            state[index].state = Constants.DeviceStates.LOADING

            if (currentLockState === Constants.DeviceStates.LOCKED) {
                // do unlock
                Api.unlockDevice(payload.entity_id)
            } else {
                // This will cover both "unlocked" and "unknown" cases
                Api.lockDevice(payload.entity_id)
            }
        }),

        toggleDevicePowerState: createAction((state, payload) => {
            const index = state.findIndex((ele) => payload.entity_id === ele.entity_id)
            const currentPowerState = state[index].state

            // Set the device state to loading
            state[index].state = Constants.DeviceStates.LOADING

            if (currentPowerState === Constants.DeviceStates.ON) {
                // handle turning off device
                Api.turnDeviceOff(payload.entity_id)
            } else {
                // this will cover both "off" and "unknown" cases
                Api.turnDeviceOn(payload.entity_id)
            }
        }),

        turnDeviceOn: createAction((_, payload) => {
            Api.turnDeviceOn(
                payload.entity_id,
                'brightness' in payload ? payload.brightness : undefined
            )
        })
    }
}

export default actions
