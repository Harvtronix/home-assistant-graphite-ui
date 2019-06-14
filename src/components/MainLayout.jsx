import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route } from 'react-router-dom'

import BottomBar from './BottomBar'
import DevicesGrid from './DevicesGrid'
import TopBar from './TopBar'

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
