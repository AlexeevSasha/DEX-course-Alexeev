import {addHistoryType} from './actions'

interface IInitialState {
    [key: string]: string[]
}

interface IAction {
    type: 'add comand cd' |  'add message' | 'add history'
    payload: string
}

const initialState: IInitialState = {
    cd: ['C:>'],
    print: [],
    history: ['C:>'],
}

export const historyReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case addHistoryType.addComnandCd :
            if (action.payload === 'cd ..') {
                return (
                    {
                        ...state,
                        cd: state.cd.slice(0, state.cd.length -  1),
                        history: [...state.history, state.cd[state.cd.length - 2]]
                    })
            }
            if (state.cd.length === 0) {
                return ( {
                    ...state,
                    cd: [`${action.payload.slice(3)}:>`],
                    history: [...state.history, `${action.payload.slice(3)}:>`]
                })
            }
            return ({
                     ...state,
                     cd: [...state.cd, `${state.cd[state.cd.length - 1].slice(0, -1)}/${action.payload.slice(3)}>`],
                     history: [...state.history, `${state.cd[state.cd.length - 1].slice(0, -1)}/${action.payload.slice(3)}>`]
                })

        case addHistoryType.setMessagePrint :
         return ({...state,
            print: [...state.print, action.payload],
            history: [...state.history, action.payload]
        })
        default : return state
    }
}




// const initialState: IInitialState = {
//     history: ['C:>'],
// }

// export const historyReducer = (state = initialState.history, action: IAction) => {
//     switch (action.type) {
//         case addHistoryType.addHistory:
//             if (state[state.length - 1].slice(-1) !== '>') {
//                 for (let i = state.length - 2; i < state.length; i--) {
//                     if (state[i].slice(-1) === '>') return [...state, `${state[i].slice(0, -1)}/${action.payload}>`]
//                 }
//             }
//             return [...state, `${state[state.length - 1].slice(0, -1)}/${action.payload}>`]
//         case addHistoryType.setMessagePrint:
//             if (action.payload.slice(-1) === '>') {
//                 return [...state, action.payload.slice(0, -1)]
//             }
//             return [...state, action.payload]
//         default: return state
//     }
// }


