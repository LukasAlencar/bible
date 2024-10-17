import { useContext, createContext, useState, useCallback } from "react"

const GlobalContext = createContext({
    darkMode: Boolean,
    handleSetDarkMode: () => {},
    handleSetNavbar: () => {},
    navbar: Boolean,
})

export const GlobalContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false)
    const [navbar, setNavbar] = useState(true)

    const handleSetDarkMode = useCallback((dark)=>{
        setDarkMode(dark)
    },[])

    const handleSetNavbar = useCallback((show)=>{
        setNavbar(show)
    },[])

    return (
        
        <GlobalContext.Provider value={{darkMode, handleSetDarkMode, handleSetNavbar, navbar}}>
            {children}     
        </GlobalContext.Provider>        
    )
}

export const useGlobalContext = () => useContext(GlobalContext)