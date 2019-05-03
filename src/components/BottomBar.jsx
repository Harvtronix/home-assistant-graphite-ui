import React from 'react'

import { Tile } from 'carbon-components-react'

const HomeIcon = require('@carbon/icons-react/lib/Home/32')

import styles from './BottomBar.m.scss'

const BottomBar = () => {
    return (
        <div className={styles['bottom-bar']}>
            <div>1</div>
            <div><HomeIcon /></div>
            <div>3</div>
        </div>
    )
}

export default BottomBar
