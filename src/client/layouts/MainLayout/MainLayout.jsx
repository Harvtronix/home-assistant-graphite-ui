import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import BottomBar from '~/client/viewlets/BottomBar'
import TopBar from '~/client/viewlets/TopBar'
import DevicesGrid from '~/client/views/DevicesGrid/DevicesGrid'

const MainLayout = () => {

    const DevicesGridRoute = () => (<DevicesGrid />)

    return (
        <HashRouter>
            <TopBar />
            <Route exact path='/' component={DevicesGridRoute} />
            <BottomBar />
        </HashRouter>
    )

}

export default MainLayout
