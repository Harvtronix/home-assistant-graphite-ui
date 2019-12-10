import React, {  useContext } from 'react'

import DeviceDb from '~/client/modules/DeviceDb'
import DeviceTile from '~/client/viewlets/DeviceTile/DeviceTile'

import styles from './DevicesGrid.m.scss'

const DevicesGrid = () => {

    const deviceDb = useContext(DeviceDb.Context)

    const getDeviceTiles = () => {
        return deviceDb.map((device) => {
            return (
                <DeviceTile
                    key={'device_tile' + device.entity_id}
                    {...device}
                />
            )
        })
    }

    const getTitle = () => {
        // TODO
    }

    return (
        <div className={styles['grid']}>
            {getTitle()}
            {getDeviceTiles()}
        </div>
    )

}

export default DevicesGrid
