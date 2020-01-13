import React from 'react'

import styles from './TopBar.m.scss'

const TopBar = () => {
    return (
        <div className={styles['top-bar']}>
            <div>
                G
            </div>
            <div className={styles['title']}>
                All devices
            </div>
            <div className={styles['end-cap']}>

            </div>
        </div>
    )
}

export default TopBar
