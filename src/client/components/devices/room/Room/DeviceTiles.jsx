import React from 'react'
import { useSubstate } from 'react-substate'

import DeviceTile from '~/client/components/_shared/DeviceTile/DeviceTile'
import substates from '~/client/modules/substate/substates'

const DeviceTiles = () => {
    const [deviceDb] = useSubstate(substates.deviceDb)

    return deviceDb.map((device) => {
        return (
            <DeviceTile
                key={'device_tile' + device.entity_id}
                {...device}
            />
        )
    })
}

export default DeviceTiles
