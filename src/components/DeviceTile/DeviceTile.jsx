import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react'

import styles from './DeviceTile.m.scss'
import PowerIndicator from './PowerIndicator'

const DeviceTile = ({dispatch, ...props}) => {

    const getDeviceTileClassName = () => {
        return classNames({
            [styles.deviceTile]: true,
            [styles.on]: props.state == 'on',
            [styles.off]: props.state == 'off',
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
                    {props.attributes.friendly_name}
                </div>

                <PowerIndicator
                    dispatch={dispatch}
                    state={props.state}
                    entity_id={props.entity_id}
                />

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
