import HomeIcon from '@carbon/icons-react/es/home/32'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './BottomBar.m.scss'

const BottomBar = () => {
    return (
        <div className={styles.bottomBar}>
            <div>1</div>
            <div>
                <Link to="/">
                    <HomeIcon />
                </Link>
            </div>
            <div>3</div>
        </div>
    )
}

export default BottomBar