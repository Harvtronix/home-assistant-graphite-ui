import React, { useContext, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'

import Constants from '~/client/modules/Constants'
import DeviceDb from '~/client/modules/DeviceDb'
import PageTitle from '~/client/modules/PageTitle'

import Dimmer from './dimmer/Dimmer'
import styles from './Room.m.scss'
import DeviceTiles from './Room/DeviceTiles'

const testRoomTitles = {
    all: 'All devices',
    livingRoom: 'Living Room'
}

const getTitle = (room) => (
    <h1>{testRoomTitles[room]}</h1>
)

const Room = () => {
    const deviceDb = useContext(DeviceDb.Context)
    const { path } = useRouteMatch()
    const { room } = useParams()

    const RoomRoutes = () => {
        return (
            <Route path={`${path}/dimmer/:entity_id`} component={Dimmer} />
        )
    }

    useEffect(() => {
        PageTitle.actions.setPageTitle('All devices' + Constants.PAGE_TITLE_SUFFIX)
    })

    if (room != 'all') {
        throw new Error('Rooms not yet implemented')
    }

    return (
        <>
            <div className={styles.grid}>
                {getTitle(room)}
                <DeviceTiles deviceDb={deviceDb} />
            </div>
            <RoomRoutes path={path} />
        </>
    )
}

export default Room
