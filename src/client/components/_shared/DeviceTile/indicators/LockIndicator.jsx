import QuestionMarkIcon from '@carbon/icons-react/es/help/32'
import LockedIcon from '@carbon/icons-react/es/locked/32'
import UnlockedIcon from '@carbon/icons-react/es/unlocked/32'
import { InlineLoading } from 'carbon-components-react'
import PropTypes from 'prop-types'
import React from 'react'
import { useSubstate } from 'react-substate'

import Constants from '~/client/modules/Constants'
import actions from '~/client/modules/substate/actions'
import substates from '~/client/modules/substate/substates'

import styles from './Indicator.m.scss'

const LockIndicator = (props) => {
    const [, dispatch] = useSubstate(substates.deviceDb)

    const getIcon = () => {
        switch (props.state) {
        case Constants.DeviceStates.LOCKED:
            return <LockedIcon className={styles.icon} />
        case Constants.DeviceStates.UNLOCKED:
            return <UnlockedIcon className={styles.icon} />
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
                onClick={() => dispatch(
                    actions.deviceDb.toggleDeviceLockState,
                    { entity_id: props.entity_id }
                )}
            >
                {getIcon()}
            </button>
        </div>
    )
}

LockIndicator.propTypes = {
    entity_id: PropTypes.string.isRequired,
    friendly_name: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}

export default LockIndicator
