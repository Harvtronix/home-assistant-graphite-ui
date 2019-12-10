import BrightnessIcon from '@carbon/icons-react/es/brightness-contrast/32'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './BrightnessSubIndicator.m.scss'

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
        <div className={styles.brightnessSubIndicator}>
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
