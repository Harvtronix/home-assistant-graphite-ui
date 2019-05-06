import React, {  useContext } from 'react'
import PropTypes from 'prop-types'

import DeviceContext from '../modules/DeviceContext'
import styles from './DevicesGrid.m.scss'
import DeviceTile from './DeviceTile/DeviceTile'

const DevicesGrid = ({dispatch}) => {

    const deviceDb = useContext(DeviceContext)

    const getDeviceTiles = () => {
        return Object.entries(deviceDb).map(([deviceId, deviceProps]) => {
            return (
                <DeviceTile
                    key={'device_tile' + deviceId}
                    {...deviceProps}
                    dispatch={dispatch}
                />
            )
        })
    }

    return (
        <div className={styles['grid']}>
            {getDeviceTiles()}
        </div>
    )

}

DevicesGrid.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default DevicesGrid
