import React from 'react'
import PropTypes from 'prop-types'

// import BatteryFullIcon from '@carbon/icons-react/es/battery--full/32'
// import BatteryHalfIcon from '@carbon/icons-react/es/battery--half/32'
// import BatteryLowIcon from '@carbon/icons-react/es/battery--low/32'
import BrightnessIcon from '@carbon/icons-react/es/brightness-contrast/32'

import styles from './BrightnessIndicator.m.scss'

const BrightnessIndicator = (props) => {

    const getBrightnessValue = () => {
        let brightness = props.brightness ? props.brightness : 0

        if (brightness == 0) {
            return 0
        } else {
            return parseInt(Math.max(1, brightness / 255 * 100))
        }
    }

    return (
        <div className={styles.brightnessIndicator}>
            <BrightnessIcon className={styles.icon} />
            <div className={styles.brightnessValue}>
                {getBrightnessValue()}%
            </div>
        </div>
    )
}

BrightnessIndicator.propTypes = {
    brightness: PropTypes.number.isRequired
}

export default BrightnessIndicator
