import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react'

import styles from './DeviceTile.m.scss'
import PowerIndicator from './PowerIndicator'

const DeviceTile = ({...props}) => {

    const getDeviceTileClassName = () => {
        return classNames({
            [styles.deviceTile]: true,
            [styles.on]: props.powerState == 'ON',
            [styles.off]: props.powerState == 'OFF',
        })
    }

    const getOverflowMenu = () => (
        <OverflowMenu className={styles.menu}>
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
                    {props.deviceName}
                </div>

                <PowerIndicator
                    {...props}
                />

                {getOverflowMenu()}
            </div>
        </div>
    )

}

DeviceTile.propTypes = {
    deviceName: PropTypes.string.isRequired,
    powerState: PropTypes.string.isRequired
}

export default DeviceTile
