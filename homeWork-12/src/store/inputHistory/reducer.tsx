import { addHistoryType } from "./actions"

interface IInitialState {
    history: string[]
}
interface IAction {
    type: "add history" | 'add message'
    payload: string
}
const initialState: IInitialState = {
    history: ['C:>'],
}

export const historyReducer = (state = initialState.history, action: IAction) => {
    switch (action.type) {
        case addHistoryType.addHistory:
            if (state[state.length - 1].slice(-1) !== '>') {
                for (let i = state.length - 2; i < state.length; i--) {
                    if (state[i].slice(-1) === '>') return [...state, `${state[i].slice(0, -1)}/${action.payload}>`]
                }
            }
            return [...state, `${state[state.length - 1].slice(0, -1)}/${action.payload}>`]
        case addHistoryType.setMessagePrint:
            if (action.payload.slice(-1) === '>') {
                return [...state, action.payload.slice(0, -1)]
            }
            return [...state, action.payload]
        default: return state
    }
}


