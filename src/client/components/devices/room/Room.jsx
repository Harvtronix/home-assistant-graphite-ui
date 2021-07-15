import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-substate'

import Constants from '~/client/modules/Constants'
import actions from '~/client/modules/substate/actions'
import substates from '~/client/modules/substate/substates'

import Dimmer from './dimmer/Dimmer'
import styles from './Room.m.scss'
import DeviceTiles from './Room/DeviceTiles'

const testRoomTitles = {
    all: 'All devices',
    livingRoom: 'Living Room'
}

const Title = ({ room }) => (
    <h1>{testRoomTitles[room]}</h1>
)

const Routes = ({ path }) => {
    return (
        <Route path={`${path}/dimmer/:entity_id`} component={Dimmer} />
    )
}

const Room = () => {
    const { path } = useRouteMatch()
    const { room } = useParams()

    const dispatch = useDispatch(substates.pageTitle)

    useEffect(() => {
        dispatch(actions.updatePageTitle, testRoomTitles[room] + Constants.PAGE_TITLE_SUFFIX)
    }, [room, dispatch])

    if (room !== 'all') {
        throw new Error('Rooms not yet implemented')
    }

    return (
        <>
            <div className={styles.grid}>
                <Title room={room} />
                <DeviceTiles />
            </div>
            <Routes path={path} />
        </>
    )
}

Title.propTypes = {
    room: PropTypes.string.isRequired
}

Routes.propTypes = {
    path: PropTypes.string.isRequired
}

export default Room
