import BrightnessIcon from '@carbon/icons-react/es/brightness-contrast/32'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import BrightnessUtils from '~/client/modules/utils/BrightnessUtils'
import Routes, { mklink } from '~/client/modules/Routes'

import styles from './BrightnessSubIndicator.m.scss'

const BrightnessSubIndicator = (props) => {
    const history = useHistory()
    const { room } = useParams()

    return (
        <>
            <button
                className={styles.brightnessSubIndicator}
                onClick={() => {
                    history.push(mklink(Routes.devices_room_dimmer_entityId, room, props.entity_id))
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
