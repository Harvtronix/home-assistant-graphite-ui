import React, { useReducer } from 'react'

import reducer from '../modules/reducer'
import DeviceContext, { testDevices } from '../modules/DeviceContext'
import HomeLayout from './HomeLayout'

const App = () => {

    // create reducer that will map to DeviceContext
    const [deviceDb, dispatch] = useReducer(reducer, testDevices)

    return (
        <DeviceContext.Provider value={deviceDb}>
            <HomeLayout dispatch={dispatch} />
        </DeviceContext.Provider>
    )

}

export default App
