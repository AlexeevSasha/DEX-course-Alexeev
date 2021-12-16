interface ICommandBufferType {
    addHistory: 'add history',
    setMessagePrint: 'add message'
}


export const addHistoryType: ICommandBufferType = {
    addHistory: "add history",
    setMessagePrint: 'add message'
};

export const historyActions = {
    setHistory: (payload: string) => ({ type: addHistoryType.addHistory, payload }),
    setMessagePrint: (payload: string) => ({ type: addHistoryType.setMessagePrint, payload }),
}