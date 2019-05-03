import React from 'react'

import BottomBar from './BottomBar'
import DevicesGrid from './DevicesGrid'
import TopBar from './TopBar'

const HomeLayout = () => {
    return (
        <>
            <TopBar />
            <DevicesGrid />
            <BottomBar />
        </>
    )
}

export default HomeLayout
