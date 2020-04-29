import Substate from 'react-substate'

const Substates = {
    pageTitle: Substate.create(''),
    deviceDb: Substate.create({})
}

const Actions = {
    updatePageTitle: Substate.createAction(
        Substates.pageTitle,
        (draft, payload) => {
            return payload
        }
    )
}

export default Substates

export {
    Substates,
    Actions
}
