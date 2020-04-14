import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Constants from '~/client/modules/Constants'

import styles from './DeviceTile.m.scss'
import DeviceIndicator from './indicators/DeviceIndicator'
import SubIndicators from './subIndicators/SubIndicators'

const DeviceTile = (props) => {
    const getDeviceTileClassName = () => {
        return classNames({
            [styles.deviceTile]: true,
            [styles.on]: props.state == Constants.DeviceStates.ON,
            [styles.off]: props.state == Constants.DeviceStates.OFF,
            [styles.unknown]: props.state == Constants.DeviceStates.UNKNOWN,
            [styles.warn]: props.state == Constants.DeviceStates.UNLOCKED
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

    return (
        <div className={styles.deviceTileContainer}>
            <div className={getDeviceTileClassName()}>
                <div className={styles.title}>
                    {props.attributes.friendly_name}
                </div>

                {/* <DimmerIndicator /> */}

                <DeviceIndicator {...props} />

                <SubIndicators {...props} />

                {getOverflowMenu()}
            </div>
        </div>
    )
}

DeviceTile.propTypes = {
    attributes: PropTypes.object.isRequired,
    state: PropTypes.string.isRequired
}

export default DeviceTile
