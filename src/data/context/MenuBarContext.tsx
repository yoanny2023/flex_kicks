"use-client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext, useState } from 'react'

interface contextNavBarProps{
  menuOpen:boolean
  setMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
  openMenuHandler: ()=> void
}

const contextNavBar = createContext<contextNavBarProps>({} as any);

export function MenuBarContextProvider(props:any) {
  const[menuOpen,setMenuOpen] = useState(false);
  
 const ctx = {
  menuOpen,
  setMenuOpen,
  openMenuHandler(){
    console.log("cliquei aqui")
  setMenuOpen((menuOpen) => !menuOpen)
  }
 }

  return (
    <contextNavBar.Provider value={ctx}>
      {props.children}
    </contextNavBar.Provider>
  )
}

export default contextNavBar;
