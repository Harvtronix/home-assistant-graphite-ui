import './App.scss'

import React, { useEffect,useReducer } from 'react'

import MainLayout from '~/client/layouts/MainLayout'
import Api from '~/client/modules/Api'
import DeviceDb from '~/client/modules/DeviceDb'

const App = () => {

    // create reducer that will map to DeviceContext
    const [deviceDb, dispatch] = useReducer(DeviceDb.reducer, [])

    DeviceDb.setDispatch(dispatch)

    useEffect(() => {
        Api.refreshStates().then(() => {
            // Dispatch the request to get initial data
            console.log('here is where i want it to be called')
            DeviceDb.actions.setDevices(Api.getDevices())

            // Open the websocket and provide it with the dispatch method
            Api.openWebsocket((eventData) => {
                DeviceDb.actions.setDeviceState(eventData)
            })
        })
    }, [])

    return (
        <DeviceDb.Context.Provider value={deviceDb}>
            <MainLayout />
        </DeviceDb.Context.Provider>
    )

}

export default App
