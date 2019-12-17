import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import DevicesGrid from '~/client/views/DevicesGrid/DevicesGrid'
import DimmerModal from '~/client/views/DimmerModal/DimmerModal'

const Redirects = () => (
    <>
        <Route
            exact
            path='/'
            render={() => (
                <Redirect to='/devices/all' push={false} />
            )}
        />
        <Route
            exact
            path='/devices'
            render={() => (
                <Redirect to='/devices/all' push={false} />
            )}
        />
    </>
)

const Routes = () => (
    <>
        <Route
            path='/devices/:room'
            component={DevicesGrid}
        />
        <Route
            path='/devices/:room/dimmer/:entity_id'
            component={DimmerModal}
        />
    </>
)

const MainLayoutRoutes = () => (
    <>
        <Redirects />
        <Routes />
    </>
)

export default MainLayoutRoutes