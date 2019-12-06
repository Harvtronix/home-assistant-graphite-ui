import PropTypes from 'prop-types'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import BottomBar from './BottomBar/BottomBar'
import DevicesGrid from './DevicesGrid/DevicesGrid'
import TopBar from './TopBar/TopBar'

const MainLayout = ({dispatch}) => {

    const DevicesGridRoute = () => (<DevicesGrid dispatch={dispatch} />)

    return (
        <HashRouter>
            <TopBar />
            <Route exact path='/' component={DevicesGridRoute} />
            <BottomBar />
        </HashRouter>
    )

}

MainLayout.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default MainLayout
