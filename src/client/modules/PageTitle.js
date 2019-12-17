/**
 * The actual dispatch function returned by the eventual call to useReducer. This is registered
 * with this module via `setDispatch()`.
 */
let setPageTitle = null

const setModifier = (incomingModifierFunction) => {
    setPageTitle = incomingModifierFunction
}

const actions = {
    setPageTitle: (payload) => {
        return setPageTitle(payload)
    }
}

export default {
    actions,
    setModifier
}
