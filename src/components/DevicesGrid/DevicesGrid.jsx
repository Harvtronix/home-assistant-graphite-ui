import PropTypes from 'prop-types'
import React, {  useContext } from 'react'

import DeviceContext from '../../modules/DeviceContext'
import DeviceTile from '../DeviceTile/DeviceTile'
import styles from './DevicesGrid.m.scss'

const DevicesGrid = ({dispatch}) => {

    const deviceDb = useContext(DeviceContext)

    const getDeviceTiles = () => {
        return deviceDb.map((device) => {
            return (
                <DeviceTile
                    key={'device_tile' + device.entity_id}
                    {...device}
                    dispatch={dispatch}
                />
            )
        })
    }

    const getTitle = () => {
        // TODO
    }

    return (
        <div className={styles['grid']}>
            {getTitle()}
            {getDeviceTiles()}
        </div>
    )

}

DevicesGrid.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default DevicesGrid