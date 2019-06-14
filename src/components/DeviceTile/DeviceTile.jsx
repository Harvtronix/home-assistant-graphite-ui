import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react'

import styles from './DeviceTile.m.scss'
import BrightnessIndicator from './SubIndicators/BrightnessSubIndicator'
import LockIndicator from './Indicators/LockIndicator'
import PowerIndicator from './Indicators/PowerIndicator'
import BatteryIndicator from './SubIndicators/BatteryLevelSubIndicator'

const DeviceTile = ({dispatch, ...props}) => {

    const BRIGHTNESS_FEATURE = 0b01

    const getBatteryIndicator = () => {
        if ('battery_level' in props.attributes) {
            const batteryLevel = props.attributes.battery_level
            return (
                <BatteryIndicator  batteryLevel={batteryLevel} />
            )
        } else {
            return null
        }
    }

    const getBrightnessIndicator = () => {
        if (hasBrightnessSupport()) {
            const brightnessValue =
                ('brightness' in props.attributes) ? props.attributes.brightness : 0

            return (
                <BrightnessIndicator brightness={brightnessValue} />
            )
        } else {
            return null
        }
    }

    const getDeviceIndicator = () => {
        const devicePrefix = props.entity_id.split('.')[0]
        let DeviceIndicator = null

        switch(devicePrefix) {
        case 'light':
        case 'switch':
        case 'zwave':
            DeviceIndicator = PowerIndicator
            break
        case 'lock':
            DeviceIndicator = LockIndicator
            break
        }

        return (
            <DeviceIndicator
                dispatch={dispatch}
                state={props.state}
                entity_id={props.entity_id}
                friendly_name={props.attributes.friendly_name}
            />
        )
    }

    const getDeviceTileClassName = () => {
        return classNames({
            [styles.deviceTile]: true,
            [styles.on]: props.state == 'on',
            [styles.off]: props.state == 'off',
            [styles.warn]: props.state == 'unlocked'
        })
    }

    const getOverflowMenu = () => (
        <OverflowMenu className={styles.menu} flipped>
            <OverflowMenuItem itemText="Add to routine" />
            <OverflowMenuItem itemText="Automate" />
            <OverflowMenuItem itemText="Change icon" hasDivider />
            <OverflowMenuItem itemText="Rename" />
        </OverflowMenu>
    )

    const hasBrightnessSupport = () => {
        if (!('supported_features' in props.attributes)) {
            return false
        }

        const featureFlags = props.attributes.supported_features

        return (featureFlags & BRIGHTNESS_FEATURE)
    }

    return (
        <div className={styles.deviceTileContainer}>
            <div className={getDeviceTileClassName()}>
                <div className={styles.title}>
                    {props.attributes.friendly_name}
                </div>

                {getDeviceIndicator()}

                {getBrightnessIndicator()}

                {getBatteryIndicator()}

                {getOverflowMenu()}
            </div>
        </div>
    )

}

DeviceTile.propTypes = {
    attributes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    entity_id: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}

export default DeviceTile
