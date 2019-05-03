import React from 'react'

import styles from './DevicesGrid.m.scss'
import DeviceTile from './DeviceTile'

const DevicesGrid = () => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <DeviceTile />
                <DeviceTile />
                <DeviceTile />
                <DeviceTile />
            </div>
        </div>
    )
}

export default DevicesGrid
