import React from 'react'
const SunIcon = require('@carbon/icons-react/lib/Light/32')
const MoonIcon = require('@carbon/icons-react/lib/Asleep/32')

import styles from './DeviceTile.m.scss'

const DeviceTile = () => {
    return (
        <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2">
            <div className={styles['device-tile']}>
                <div className={styles['title']}>
                    Bedroom Lights
                </div>
                <SunIcon />
                or
                <MoonIcon />
            </div>
        </div>
    )
}

export default DeviceTile
