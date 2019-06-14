import React from 'react'
import PropTypes from 'prop-types'

import LockedIcon from '@carbon/icons-react/es/locked/32'
import UnlockedIcon from '@carbon/icons-react/es/unlocked/32'

import styles from './Indicator.m.scss'

const LockIndicator = ({dispatch, ...props}) => {

    const getIcon = () => {
        switch (props.state) {
        case 'locked':
            return <LockedIcon className={styles.icon} />
        case 'unlocked':
            return <UnlockedIcon className={styles.icon} />
        }
    }

    return (
        <div className={styles.indicator}>
            <button
                aria-label={'toggle ' + props.friendly_name + ' state'}
                className={styles.button}
                onClick={() => dispatch({
                    type: 'TOGGLE_DEVICE_LOCK_STATE',
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

LockIndicator.propTypes = {
    entity_id: PropTypes.string.isRequired,
    friendly_name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired
}

export default LockIndicator
