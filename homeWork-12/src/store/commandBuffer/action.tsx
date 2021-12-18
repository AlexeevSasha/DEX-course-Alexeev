interface ICommandBufferType {
    addCommandBuffer: 'add сommandBuffer'
}

export const сommandBufferType: ICommandBufferType = {
    addCommandBuffer: "add сommandBuffer",
};

export const сommandBufferActions = {
    setCommandBuffer: (payload: string) => ({ type: сommandBufferType.addCommandBuffer, payload })
}