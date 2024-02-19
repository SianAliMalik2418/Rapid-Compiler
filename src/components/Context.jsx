import React, { createContext, useState } from 'react'

export let dataContext = createContext();


function Context({children}) {


    let [language,setLanguage] = useState("nodejs")

  return (
    <dataContext.Provider value={{language, setLanguage}}>
      {children}
    </dataContext.Provider>
  )
}

export default Context