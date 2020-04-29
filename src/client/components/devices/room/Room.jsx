import React, { useContext, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'
import { useSubstate } from 'react-substate'

import Constants from '~/client/modules/Constants'
import DeviceDb from '~/client/modules/DeviceDb'
import { Actions, Substates } from '~/client/modules/Substates'

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

    const [, dispatch] = useSubstate(Substates.pageTitle)

    const Routes = () => {
        return (
            <Route path={`${path}/dimmer/:entity_id`} component={Dimmer} />
        )
    }

    useEffect(() => {
        dispatch(Actions.updatePageTitle, testRoomTitles[room] + Constants.PAGE_TITLE_SUFFIX)
    }, [room, dispatch])

    if (room !== 'all') {
        throw new Error('Rooms not yet implemented')
    }

    return (
        <>
            <div className={styles.grid}>
                {getTitle(room)}
                <DeviceTiles deviceDb={deviceDb} />
            </div>
            <Routes />
        </>
    )
}

export default Room
