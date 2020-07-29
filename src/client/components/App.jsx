import './App.scss'

import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { usePatchEffect, useSubstate } from 'react-substate'

import Api from '~/client/modules/Api'
import actions from '~/client/modules/substate/actions'
import substates from '~/client/modules/substate/substates'

import BottomBar from './App/BottomBar/BottomBar'
import TopBar from './App/TopBar/TopBar'
import Devices from './devices/Devices'

const Routes = () => {
    return (
        <Switch>
            <Route path='/devices' component={Devices} />

            <Redirect to='/devices' />
        </Switch>
    )
}

const App = () => {
    const [pageTitle] = useSubstate(substates.pageTitle)
    const [, dispatch] = useSubstate(substates.deviceDb)

    usePatchEffect((patches) => {
        console.log('Device DB updated')
        console.log(patches)
    }, substates.deviceDb)

    // Set up the websocket. When opened, this will load the initial data
    useEffect(() => {
        Api.openWebsocket({
            onOpen: () => {
                // Retrieve new states and devices from the API
                Api.refreshStates().then(() => {
                    // Put latest data into the device db
                    dispatch(actions.deviceDb.setDevices, Api.getDevices())
                })
            },
            onEvent: (eventData) => {
                dispatch(actions.deviceDb.setDeviceState, eventData)
            }
        })
    }, [dispatch])

    // Update the page title as-needed
    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle])

    return (
        <BrowserRouter>
            <TopBar />
            <Routes />
            <BottomBar />
        </BrowserRouter>
    )
}

export default App
