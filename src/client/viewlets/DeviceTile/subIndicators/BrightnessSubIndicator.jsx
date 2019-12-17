import BrightnessIcon from '@carbon/icons-react/es/brightness-contrast/32'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './BrightnessSubIndicator.m.scss'

const BrightnessIndicator = (props) => {

    const history = useHistory()

    const getBrightnessValue = () => {
        let brightness = props.brightness ? props.brightness : 0

        if (brightness == 0) {
            return 0
        } else {
            return parseInt(Math.max(1, brightness / 255 * 100))
        }
    }

    return (
        <>
            <button
                className={styles.brightnessSubIndicator}
                onClick={() => {
                    history.push(`/devices/all/dimmer/${props.entity_id}`)
                }}
            >
                <BrightnessIcon className={styles.icon} />
                <div className={styles.brightnessValue}>
                    {getBrightnessValue()}%
                </div>
            </button>
        </>
    )
}

BrightnessIndicator.propTypes = {
    brightness: PropTypes.number.isRequired,
    entity_id: PropTypes.string.isRequired
}

export default BrightnessIndicator
