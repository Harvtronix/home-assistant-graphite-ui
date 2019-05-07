import React, { useReducer, useEffect } from 'react'

import reducer from '../modules/reducer'
import DeviceContext from '../modules/DeviceContext'
import Api from '../modules/Api'
import HomeLayout from './HomeLayout'

const App = () => {

    // create reducer that will map to DeviceContext
    const [deviceDb, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        Api.listDevices((devices) => {
            dispatch({
                type: 'SET_DEVICES',
                payload: devices
            })
        })
    }, [])

    return (
        <DeviceContext.Provider value={deviceDb}>
            <HomeLayout dispatch={dispatch} />
        </DeviceContext.Provider>
    )

}

export default App
