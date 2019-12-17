import {
    ComposedModal,
    ModalBody,
    ModalFooter,
    ModalHeader } from 'carbon-components-react'
import React, {useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import DeviceDb from '~/client/modules/DeviceDb'

const DimmerModal = () => {
    const { entity_id } = useParams()
    const history = useHistory()
    const deviceDb = useContext(DeviceDb.Context)

    const doClose = () => {
        history.goBack()
    }

    const getDeviceName = () => {
        if (!deviceDb) {
            return null
        }

        const device = deviceDb.find((device) => (device.entity_id == entity_id))

        if (!device) {
            return null
        }

        return device.attributes.friendly_name
    }

    return (
        <ComposedModal
            onClose={doClose}
            open
            selectedPrimaryFocus='[data-modal-primary-focus]'
        >
            <ModalHeader
                iconDescription="Close"
                label={getDeviceName()}
                title="Adjust brightness"
            />
            <ModalBody aria-label="Example modal content">
                here is the content
            </ModalBody>
            <ModalFooter
                onRequestSubmit={doClose}
                primaryButtonText="Close"
            />
        </ComposedModal>
    )
}

export default DimmerModal
