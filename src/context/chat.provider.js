import { createContext, useContext } from "react";

const ChatContext = createContext()

const ChatProvider = ChatContext.Provider


export const ChatState = () => {
    return useContext(ChatContext)
}

export default ChatProvider