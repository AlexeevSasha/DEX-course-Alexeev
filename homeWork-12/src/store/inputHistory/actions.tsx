interface ICommandBufferType {
    addComnandCd: 'add comand cd',
    setMessagePrint: 'add message',
    addHistory: 'add history',


}


export const addHistoryType: ICommandBufferType = {
    addComnandCd: 'add comand cd',
    setMessagePrint: 'add message',
    addHistory: "add history",
};

export const historyActions = {
    setComandCd: (payload: string) => ({ type: addHistoryType.addComnandCd, payload }),
    setMessagePrint: (payload: string) => ({ type: addHistoryType.setMessagePrint, payload }),
    setHistory: (payload: string) => ({ type: addHistoryType.addHistory, payload }),
}