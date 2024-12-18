import React from 'react'
import { GlobalCss } from './styles.ts'
import { CartProvider } from './components/Cart/CartContext.js'
import NavBar from './components/NavBar/index.tsx'
import Banner from './components/Banner/index.tsx'
import Menu from './components/Menu/index.tsx'
import Cart from './components/Cart/index.tsx'

function App () {
    return(
        <CartProvider>
            <GlobalCss />
            <NavBar />
            <Banner />
            <Menu />
            <Cart />
        </CartProvider>
)}

export default App