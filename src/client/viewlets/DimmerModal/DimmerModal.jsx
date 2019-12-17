import { Modal } from 'carbon-components-react'
import React, {useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import DeviceDb from '~/client/modules/DeviceDb'

const DimmerModal = () => {
    const { entity_id } = useParams()
    const history = useHistory()
    const deviceDb = useContext(DeviceDb.Context)

    const onRequestClose = () => {
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
        <Modal
            modalAriaLabel='Brightness adjustment modal'
            modalHeading='Adjust brightness'
            modalLabel={getDeviceName()}
            onRequestClose={onRequestClose}
            open
            passiveModal={true}
        />
    )
}

export default DimmerModal
