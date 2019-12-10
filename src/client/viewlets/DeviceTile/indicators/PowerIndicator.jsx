import MoonIcon from '@carbon/icons-react/es/asleep/32'
import SunIcon from '@carbon/icons-react/es/light/32'
import PropTypes from 'prop-types'
import React from 'react'

import DeviceDb from '~/client/modules/DeviceDb'

import styles from './Indicator.m.scss'

const PowerIndicator = (props) => {

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
                onClick={() => DeviceDb.actions.toggleDevicePowerState({
                    entity_id: props.entity_id
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
    state: PropTypes.string.isRequired
}

export default PowerIndicator
