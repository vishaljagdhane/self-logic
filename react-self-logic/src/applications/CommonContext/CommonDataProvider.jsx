import React, { createContext, useState } from 'react'

export const DataProvider = createContext();
export default function CommonDataProvider({children }) {
    const [test ,setTest]=useState('I am Common Data Provider')
    const ContextValue ={
    test,setTest
    }
  return (
<DataProvider.Provider value={ContextValue} >
    {children }
</DataProvider.Provider>
  )
}
