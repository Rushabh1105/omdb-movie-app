import React, { useState, useContext, createContext } from 'react'
import useFetch from '../API/useFetch'

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [query, setQuery] = useState('marvel');
    const {isLoading, error, data : movies} = useFetch(`&s=${query}`);


    return (
        <AppContext.Provider value={ {isLoading, error, movies, query, setQuery} } >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => useContext(AppContext);
export {AppProvider}