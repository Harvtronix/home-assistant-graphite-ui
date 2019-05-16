import React, {  useContext } from 'react'
import PropTypes from 'prop-types'

import DeviceContext from '../modules/DeviceContext'
import styles from './DevicesGrid.m.scss'
import DeviceTile from './DeviceTile/DeviceTile'

const DevicesGrid = ({dispatch}) => {

    const deviceDb = useContext(DeviceContext)
    // const currentPage

    const getDeviceTiles = () => {
        return deviceDb.map((device) => {
            return (
                <DeviceTile
                    key={'device_tile' + device.entity_id}
                    {...device}
                    dispatch={dispatch}
                />
            )
        })
    }

    const getTitle = () => {

    }

    return (
        <div className={styles['grid']}>
            {getTitle()}
            {getDeviceTiles()}
        </div>
    )

}

DevicesGrid.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default DevicesGrid
