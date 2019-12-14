import React from 'react'
import { Redirect,Route, Switch } from 'react-router-dom'

import BottomBar from '~/client/viewlets/BottomBar'
import TopBar from '~/client/viewlets/TopBar'
import DevicesGrid from '~/client/views/DevicesGrid/DevicesGrid'

const MainLayout = () => {

    return (
        <>
            <TopBar />
            <Switch>
                {/* Redirect to the 'all' room by default */}
                <Route
                    exact
                    path='/devices'
                    render={() => (
                        <Redirect to='/devices/all' push={false} />
                    )}
                />
                <Route path='/devices/:room' component={DevicesGrid} />
            </Switch>
            <BottomBar />
        </>
    )

}

export default MainLayout
