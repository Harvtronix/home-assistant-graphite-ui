import PropTypes from 'prop-types'
import React from 'react'

import DeviceTile from '~/client/components/_shared/DeviceTile/DeviceTile'

const DeviceTiles = ({ deviceDb, ...props }) => {
    return deviceDb.map((device) => {
        return (
            <DeviceTile
                key={'device_tile' + device.entity_id}
                {...device}
            />
        )
    })
}

DeviceTiles.propTypes = {
    deviceDb: PropTypes.array
}

export default DeviceTiles
