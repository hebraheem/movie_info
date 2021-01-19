import React, {useContext} from 'react'

const movieContext = React.createContext();

export const movieProvider= ({children})=>{
    <movieContext.Provider value={{hello: "hello"}}>
    {children}
    </movieContext.Provider>
}

export const movieConsumer=()=>{
    return useContext(movieContext)
}