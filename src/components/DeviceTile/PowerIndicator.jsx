import React from 'react'
import PropTypes from 'prop-types'

import SunIcon from '@carbon/icons-react/lib/Light/32'
import MoonIcon from '@carbon/icons-react/lib/Asleep/32'

import styles from './PowerIndicator.m.scss'

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
        <div
            className={styles.powerIndicator}
            onClick={() => dispatch({
                type: 'TOGGLE_DEVICE_POWER_STATE',
                payload: {
                    entity_id: props.entity_id
                }
            })}
        >
            {getIcon()}
        </div>
    )
}

PowerIndicator.propTypes = {
    entity_id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired
}

export default PowerIndicator
