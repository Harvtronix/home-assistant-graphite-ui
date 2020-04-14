import React from 'react'

import BottomBar from '~/client/viewlets/BottomBar'
import TopBar from '~/client/viewlets/TopBar'
import MainLayoutRoutes from '~/client/views/routes/MainLayoutRoutes'

const MainLayout = () => {
    return (
        <>
            <TopBar />
            <MainLayoutRoutes />
            <BottomBar />
        </>
    )
}

export default MainLayout
