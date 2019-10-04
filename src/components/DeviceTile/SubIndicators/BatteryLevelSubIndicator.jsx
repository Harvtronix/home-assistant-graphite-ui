import BatteryFullIcon from '@carbon/icons-react/es/battery--full/32'
import BatteryHalfIcon from '@carbon/icons-react/es/battery--half/32'
import BatteryLowIcon from '@carbon/icons-react/es/battery--low/32'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './BatteryLevelSubIndicator.m.scss'

const BatteryLevelSubIndicator = (props) => {

    const getIcon = () => {
        let Icon = null

        if (props.batteryLevel > 66) {
            Icon = BatteryFullIcon
        } else if (props.batteryLevel > 33) {
            Icon = BatteryHalfIcon
        } else {
            Icon = BatteryLowIcon
        }

        return <Icon className={styles.icon} />
    }

    return (
        <div className={styles.batteryLevelSubIndicator}>
            {getIcon()}
            <div className={styles.batteryLevel}>
                {props.batteryLevel}%
            </div>
        </div>
    )
}

BatteryLevelSubIndicator.propTypes = {
    batteryLevel: PropTypes.number.isRequired
}

export default BatteryLevelSubIndicator
