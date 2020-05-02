import {
    ComposedModal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Slider
} from 'carbon-components-react'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSubstate } from 'react-substate'

import actions from '~/client/modules/substate/actions'
import substates from '~/client/modules/substate/substates'
import BrightnessUtils from '~/client/modules/utils/BrightnessUtils'

const ModalBodyContent = ({ dispatch, device }) => {
    return (
        <Slider
            ariaLabelInput="Adjust brightness slider"
            inputType="number"
            labelText="Adjust brightness"
            max={100}
            min={1}
            onRelease={({ value }) => {
                dispatch(actions.deviceDb.turnDeviceOn, {
                    entity_id: device.entity_id,
                    brightness: BrightnessUtils.getBrightnessAsByte(value)
                })
            }}
            step={1}
            value={BrightnessUtils.getBrightnessAsPercent(device.attributes.brightness)}
        />
    )
}

const Dimmer = () => {
    const history = useHistory()
    const { entity_id } = useParams()

    const [devices, dispatch] = useSubstate(substates.deviceDb)

    // Ensure we have a set of devices
    if (!devices) {
        return null
    }

    const device = devices.find((device) => (device.entity_id === entity_id))

    // Ensure we actually found a device
    if (!device) {
        return null
    }

    const handleCloseModal = () => {
        history.goBack()
    }

    return (
        <ComposedModal
            onClose={handleCloseModal}
            open
            selectorPrimaryFocus='[data-modal-primary-focus]'
        >
            <ModalHeader
                iconDescription="Close"
                title={device.attributes.friendly_name}
            />
            <ModalBody aria-label="Adjust device brightness">
                <ModalBodyContent dispatch={dispatch} device={device} />
            </ModalBody>
            <ModalFooter
                onRequestSubmit={handleCloseModal}
                primaryButtonText="Close"
            />
        </ComposedModal>
    )
}

ModalBodyContent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    device: PropTypes.object.isRequired
}

Dimmer.propTypes = {
    entity_id: PropTypes.string
}

export default Dimmer
