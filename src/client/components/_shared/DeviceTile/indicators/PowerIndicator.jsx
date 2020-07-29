import MoonIcon from '@carbon/icons-react/es/asleep/32'
import QuestionMarkIcon from '@carbon/icons-react/es/help/32'
import SunIcon from '@carbon/icons-react/es/light/32'
import PropTypes from 'prop-types'
import React from 'react'
import { useSubstate } from 'react-substate'

import actions from '~/client/modules/substate/actions'
import substates from '~/client/modules/substate/substates'

import styles from './Indicator.m.scss'

const PowerIndicator = (props) => {
    const [, dispatch] = useSubstate(substates.deviceDb)
    const getIcon = () => {
        switch (props.state) {
        case 'on':
            return <SunIcon className={styles.icon} />
        case 'off':
            return <MoonIcon className={styles.icon} />
        default:
            return <QuestionMarkIcon className={styles.icon} />
        }
    }

    return (
        <div className={styles.indicator}>
            <button
                aria-label={'toggle ' + props.friendly_name + ' state'}
                className={styles.button}
                onClick={() => {
                    dispatch(actions.deviceDb.toggleDevicePowerState, {
                        entity_id: props.entity_id
                    })
                }}
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
