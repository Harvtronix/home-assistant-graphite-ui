import PropTypes from 'prop-types'
import React from 'react'

import LockIndicator from './LockIndicator'
import PowerIndicator from './PowerIndicator'

const DeviceIndicator = (props) => {
    const devicePrefix = props.entity_id.split('.')[0]
    let DeviceIndicator = null

    switch (devicePrefix) {
    case 'light':
    case 'switch':
    // case 'zwave':
        DeviceIndicator = PowerIndicator
        break
    case 'lock':
        DeviceIndicator = LockIndicator
        break
    }

    return (
        <DeviceIndicator
            state={props.state}
            entity_id={props.entity_id}
            friendly_name={props.attributes.friendly_name}
        />
    )
}

DeviceIndicator.propTypes = {
    attributes: PropTypes.object.isRequired,
    entity_id: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}

export default DeviceIndicator
