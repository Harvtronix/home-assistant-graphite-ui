import BrightnessIcon from '@carbon/icons-react/es/brightness-contrast/32'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'

import BrightnessUtils from '~/client/modules/utils/BrightnessUtils'

import styles from './BrightnessSubIndicator.m.scss'

const BrightnessSubIndicator = (props) => {
    const history = useHistory()
    const { url } = useRouteMatch()

    return (
        <>
            <button
                className={styles.brightnessSubIndicator}
                onClick={() => {
                    history.push(`${url}/dimmer/${props.entity_id}`)
                }}
            >
                <BrightnessIcon className={styles.icon} />
                <div className={styles.brightnessValue}>
                    {BrightnessUtils.getBrightnessAsPercent(props.brightness)}%
                </div>
            </button>
        </>
    )
}

BrightnessSubIndicator.propTypes = {
    brightness: PropTypes.number.isRequired,
    entity_id: PropTypes.string.isRequired
}

export default BrightnessSubIndicator
