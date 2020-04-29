import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import Room from './room/Room'

const Devices = () => {
    const { path, url } = useRouteMatch()

    return (
        <Switch>
            <Route path={`${path}/:room`} component={Room} />

            <Redirect to={`${url}/all`} />
        </Switch>
    )
}

export default Devices
