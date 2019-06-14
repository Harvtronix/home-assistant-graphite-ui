import React from 'react'
import PropTypes from 'prop-types'

import SunIcon from '@carbon/icons-react/es/light/32'
import MoonIcon from '@carbon/icons-react/es/asleep/32'

import styles from './Indicator.m.scss'

const PowerIndicator = ({dispatch, ...props}) => {

    const getIcon = () => {
        switch (props.state) {
        case 'on':
            return <SunIcon className={styles.icon} />
        case 'off':
            return <MoonIcon className={styles.icon} />
        }
    }

    return (
        <div className={styles.indicator}>
            <button
                aria-label={'toggle ' + props.friendly_name + ' state'}
                className={styles.button}
                onClick={() => dispatch({
                    type: 'TOGGLE_DEVICE_POWER_STATE',
                    payload: {
                        entity_id: props.entity_id
                    }
                })}
            >
                {getIcon()}
            </button>
        </div>
    )
}

PowerIndicator.propTypes = {
    entity_id: PropTypes.string.isRequired,
    friendly_name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired
}

export default PowerIndicator
