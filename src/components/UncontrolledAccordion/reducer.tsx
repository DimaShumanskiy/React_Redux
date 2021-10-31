type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCopy = {
                ...state,
                collapsed: !state.collapsed
            }
            // stateCopy.collapsed = !state.collapsed
            return stateCopy
        default:
            return state
    }
}