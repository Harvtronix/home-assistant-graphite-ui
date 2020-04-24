import QuestionMarkIcon from '@carbon/icons-react/es/help/32'
import LockedIcon from '@carbon/icons-react/es/locked/32'
import UnlockedIcon from '@carbon/icons-react/es/unlocked/32'
import PropTypes from 'prop-types'
import React from 'react'

import Constants from '~/client/modules/Constants'
import DeviceDb from '~/client/modules/DeviceDb'

import styles from './Indicator.m.scss'

const LockIndicator = (props) => {
    const getIcon = () => {
        switch (props.state) {
        case Constants.DeviceStates.LOCKED:
            return <LockedIcon className={styles.icon} />
        case Constants.DeviceStates.UNLOCKED:
            return <UnlockedIcon className={styles.icon} />
        default:
            return <QuestionMarkIcon className={styles.icon} />
        }
    }

    return (
        <div className={styles.indicator}>
            <button
                aria-label={'toggle ' + props.friendly_name + ' state'}
                className={styles.button}
                onClick={() => DeviceDb.actions.toggleDeviceLockState({
                    entity_id: props.entity_id
                })}
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
