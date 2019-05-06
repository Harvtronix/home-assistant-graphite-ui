import React from 'react'
import PropTypes from 'prop-types'

import SunIcon from '@carbon/icons-react/lib/Light/32'
import MoonIcon from '@carbon/icons-react/lib/Asleep/32'

import styles from './PowerIndicator.m.scss'

const PowerIndicator = ({dispatch, ...props}) => {

    const getIcon = () => {
        switch (props.powerState) {
        case 'ON':
            return <SunIcon className={styles.icon} />
        case 'OFF':
            return <MoonIcon className={styles.icon} />
        }
    }

    return (
        <div
            className={styles.powerIndicator}
            onClick={() => dispatch({
                type: 'TOGGLE_DEVICE_POWER_STATE',
                payload: {
                    deviceId: props.deviceId
                }
            })}
        >
            {getIcon()}
        </div>
    )
}

PowerIndicator.propTypes = {
    deviceId: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    powerState: PropTypes.string.isRequired
}

export default PowerIndicator
