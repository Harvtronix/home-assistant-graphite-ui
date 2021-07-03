import PropTypes from 'prop-types'
import React from 'react'

import Constants from '~/client/modules/Constants'

import BatterySubIndicator from './BatteryLevelSubIndicator'
import BrightnessSubIndicator from './BrightnessSubIndicator'

const BRIGHTNESS_FEATURE = 0b100000

const SubIndicators = (props) => {
    const getBatterySubIndicator = () => {
        if (Constants.EntityAttributes.BATTERY_LEVEL in props.attributes) {
            const batteryLevel = props.attributes.battery_level
            return (
                <BatterySubIndicator batteryLevel={batteryLevel} />
            )
        } else {
            return null
        }
    }

    const getBrightnessSubIndicator = () => {
        if (hasBrightnessSupport()) {
            const brightnessValue =
                (Constants.EntityAttributes.BRIGHTNESS in props.attributes)
                    ? props.attributes.brightness
                    : 0

            return (
                <BrightnessSubIndicator
                    brightness={brightnessValue}
                    entity_id={props.entity_id}
                />
            )
        } else {
            return null
        }
    }

    const hasBrightnessSupport = () => {
        if (!(Constants.EntityAttributes.SUPPORTED_FEATURES in props.attributes)) {
            return false
        }

        const featureFlags = props.attributes.supported_features

        return (featureFlags & BRIGHTNESS_FEATURE)
    }

    return (
        <>
            {getBrightnessSubIndicator()}

            {getBatterySubIndicator()}
        </>
    )
}

SubIndicators.propTypes = {
    attributes: PropTypes.object.isRequired,
    entity_id: PropTypes.string.isRequired
}

export default SubIndicators
