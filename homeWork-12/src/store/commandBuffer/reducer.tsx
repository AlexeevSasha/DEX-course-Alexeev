import { сommandBufferType } from "./action"

interface IInitialState {
    сommandBuffer: string[]
}

interface IAction {
    type: 'add сommandBuffer',
    payload: string
}

export const initialState: IInitialState = {
    сommandBuffer: [],
}


export const сommandBufferTypeReducer = (state = initialState.сommandBuffer, action: IAction) => {
    switch (action.type) {
        case сommandBufferType.addCommandBuffer:
            return [...state, action.payload]
        default: return state
    }
}