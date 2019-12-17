import './App.scss'

import React, { useEffect,useReducer, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import MainLayout from '~/client/layouts/MainLayout'
import Api from '~/client/modules/Api'
import DeviceDb from '~/client/modules/DeviceDb'

import PageTitle from '../modules/PageTitle'

const App = () => {

    // create reducer for DeviceDb.Context
    const [deviceDb, dispatch] = useReducer(DeviceDb.reducer, [])

    // Create reducer for PageTitle.Context
    const [pageTitle, setPageTitle] = useState('')

    DeviceDb.setDispatch(dispatch)
    PageTitle.setModifier(setPageTitle)

    // Get initial data and setup websocket
    useEffect(() => {
        Api.refreshStates().then(() => {
            // Dispatch the request to get initial data
            DeviceDb.actions.setDevices(Api.getDevices())

            // Open the websocket and provide it with the dispatch method
            Api.openWebsocket((eventData) => {
                DeviceDb.actions.setDeviceState(eventData)
            })
        })
    }, [])

    // Update the page title as-needed
    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle])

    return (
        <DeviceDb.Context.Provider value={deviceDb}>
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        </DeviceDb.Context.Provider>
    )

}

export default App
