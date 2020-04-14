import {
    ComposedModal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Slider
} from 'carbon-components-react'
import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import DeviceDb from '~/client/modules/DeviceDb'
import BrightnessUtils from '~/client/modules/utils/BrightnessUtils'

const DimmerModal = () => {
    const { entity_id } = useParams()
    const history = useHistory()
    const devices = useContext(DeviceDb.Context)

    // Ensure we have a set of devices
    if (!devices) {
        return null
    }

    const device = devices.find((device) => (device.entity_id == entity_id))

    // Ensure we actually found a device
    if (!device) {
        return null
    }

    const doClose = () => {
        history.goBack()
    }

    const createBodyContent = () => (
        <Slider
            ariaLabelInput="Adjust brightness slider"
            inputType="number"
            labelText="Adjust brightness"
            max={100}
            min={1}
            onRelease={({ value }) => {
                DeviceDb.actions.turnDeviceOn({
                    entity_id: device.entity_id,
                    brightness: BrightnessUtils.getBrightnessAsByte(value)
                })
            }}
            step={1}
            value={BrightnessUtils.getBrightnessAsPercent(device.attributes.brightness)}
        />
    )

    return (
        <ComposedModal
            onClose={doClose}
            open
            selectorPrimaryFocus='[data-modal-primary-focus]'
        >
            <ModalHeader
                iconDescription="Close"
                title={device.attributes.friendly_name}
            />
            <ModalBody aria-label="Adjust device brightness">
                {createBodyContent()}
            </ModalBody>
            <ModalFooter
                onRequestSubmit={doClose}
                primaryButtonText="Close"
            />
        </ComposedModal>
    )
}

export default DimmerModal
