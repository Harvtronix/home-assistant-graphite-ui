import React, { useReducer, useEffect } from 'react'

import reducer from '../modules/reducer'
import DeviceContext from '../modules/DeviceContext'
import Api from '../modules/Api'
import MainLayout from './MainLayout'

const App = () => {

    // create reducer that will map to DeviceContext
    const [deviceDb, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        Api.refreshStates().then(() => {
            // Dispatch the request to get initial data
            dispatch({
                type: 'SET_DEVICES',
                payload: Api.getDevices()
            })

            // Open the websocket and provide it with the dispatch method
            Api.openWebsocket(dispatch)
        })
    }, [])

    return (
        <DeviceContext.Provider value={deviceDb}>
            <MainLayout dispatch={dispatch} />
        </DeviceContext.Provider>
    )

}

export default App
