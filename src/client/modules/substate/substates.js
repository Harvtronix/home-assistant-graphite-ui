import { createSubstate } from 'react-substate'

const substates = {
    pageTitle: createSubstate(''),
    deviceDb: createSubstate([])
}

export default substates
