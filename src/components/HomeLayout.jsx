import React from 'react'
import PropTypes from 'prop-types'

import BottomBar from './BottomBar'
import DevicesGrid from './DevicesGrid'
import TopBar from './TopBar'

const HomeLayout = ({dispatch}) => {

    return (
        <>
            <TopBar />
            <DevicesGrid dispatch={dispatch} />
            <BottomBar />
        </>
    )

}

HomeLayout.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default HomeLayout
