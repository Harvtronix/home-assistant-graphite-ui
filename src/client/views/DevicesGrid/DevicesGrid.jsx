import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Constants from '~/client/modules/Constants'
import DeviceDb from '~/client/modules/DeviceDb'
import PageTitle from '~/client/modules/PageTitle'
import DeviceTile from '~/client/viewlets/DeviceTile/DeviceTile'

import styles from './DevicesGrid.m.scss'

// const testRoomTitles = {
//     all: 'All Devices',
//     livingRoom: 'Living Room'
// }

// const getTitle = (room) => {
//     return testRoomTitles[room]
// }

const DevicesGrid = () => {

    const deviceDb = useContext(DeviceDb.Context)

    const { room } = useParams()

    useEffect(() => {
        PageTitle.actions.setPageTitle('All devices' + Constants.PAGE_TITLE_SUFFIX)
    })

    const createDeviceTiles = () => {
        if (room != 'all') {
            throw 'Rooms not yet implemented'
        }
        return deviceDb.map((device) => {
            return (
                <DeviceTile
                    key={'device_tile' + device.entity_id}
                    {...device}
                />
            )
        })
    }

    return (
        <div className={styles['grid']}>
            {/* {getTitle(room)} */}
            {createDeviceTiles()}
        </div>
    )

}

export default DevicesGrid
