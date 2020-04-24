import React, { useContext, useEffect } from 'react'
import { useParams, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom'

import Constants from '~/client/modules/Constants'
import DeviceDb from '~/client/modules/DeviceDb'
import PageTitle from '~/client/modules/PageTitle'
import DeviceTile from '~/client/components/_shared/DeviceTile/DeviceTile'

import styles from './Room.m.scss'
import Routes, { mklink } from '~/client/modules/Routes'
import Dimmer from './dimmer/Dimmer'

const testRoomTitles = {
    all: 'All devices',
    livingRoom: 'Living Room'
}

const getTitle = (room) => (
    <h1>{testRoomTitles[room]}</h1>
)

const RoomRoutes = () => {
    const match = useRouteMatch()

    console.log('hello')
    console.log(match.path)

    return (
        <Switch>
            <Route
                // TODO: allow this to be appended to any route?
                path={Routes.devices_room_dimmer_entityId}
                component={Dimmer}
            />

            <Route
                path={match.path}
                render={() => (
                    <Redirect to={mklink(Routes.devices_room, 'all')} push={false} />
                )}
            />
        </Switch>
    )
}

const Room = () => {
    const deviceDb = useContext(DeviceDb.Context)

    const { room } = useParams()

    useEffect(() => {
        PageTitle.actions.setPageTitle('All devices' + Constants.PAGE_TITLE_SUFFIX)
    })

    const createDeviceTiles = () => {
        if (room != 'all') {
            throw new Error('Rooms not yet implemented')
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
        <div className={styles.grid}>
            {getTitle(room)}
            {createDeviceTiles()}
            <RoomRoutes />
        </div>
    )
}

export default Room
