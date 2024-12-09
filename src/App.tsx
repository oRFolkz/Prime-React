import React from 'react'
import { GlobalCss } from './styles.ts'
import NavBar from './components/NavBar/index.tsx'
import Banner from './components/Banner/index.tsx'
import Menu from './components/Menu/index.tsx'

function App () {
    return(
        <>
            <GlobalCss />
            <NavBar />
            <Banner />
            <Menu />
        </>
)}

export default App