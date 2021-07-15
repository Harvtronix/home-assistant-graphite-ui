import MoonIcon from '@carbon/icons-react/es/asleep/32'
import QuestionMarkIcon from '@carbon/icons-react/es/help/32'
import SunIcon from '@carbon/icons-react/es/light/32'
import { InlineLoading } from 'carbon-components-react'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch } from 'react-substate'

import Constants from '~/client/modules/Constants'
import actions from '~/client/modules/substate/actions'
import substates from '~/client/modules/substate/substates'

import styles from './Indicator.m.scss'

const PowerIndicator = (props) => {
    const dispatch = useDispatch(substates.deviceDb)
    const getIcon = () => {
        switch (props.state) {
        case Constants.DeviceStates.ON:
            return <SunIcon className={styles.icon} />
        case Constants.DeviceStates.OFF:
            return <MoonIcon className={styles.icon} />
        case Constants.DeviceStates.LOADING:
            return <InlineLoading className={styles.loadingSpinner} />
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
