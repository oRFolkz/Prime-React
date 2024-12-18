import React, { useState } from "react"
import { MainContainer, ScrollDiv, SelectedMenuBG, SelectedMenu, ScrollMobile, ScrollTags, OpacityBackground } from "./style.ts"

import Lanches from "./Lanches/index.tsx"
import Molhos from "./Molhos/index.tsx"
import Porcoes from "./Porcoes/index.tsx"
import Doces from "./Doces/index.tsx"
import Refrigerantes from "./Refrigerantes/index.tsx"
import Sucos from "./Sucos/index.tsx"
import Cervejas from "./Cervejas/index.tsx"


function Menu() {
    const [tagLanchesActive, setTagLanchesActive] = useState(true)
    const [tagMolhosActive, setTagMolhosActive] = useState(Boolean)
    const [tagPorcoesActive, setTagPorcoesActive] = useState(Boolean)
    const [tagDocesActive, setTagDocesActive] = useState(Boolean)
    const [tagRefigerantesActive, setTagRefigerantesActive] = useState(Boolean)
    const [tagSucosActive, setTagSucosActive] = useState(Boolean)
    const [tagCervejasActive, setTagCervejasActive] = useState(Boolean)

    const [hidden, setHidden] = useState(false)

    function toggleMenu(id) {
        if (id === 0) {
            setTagLanchesActive(true)
            setTagMolhosActive(false)
            setTagPorcoesActive(false)
            setTagDocesActive(false)
            setTagRefigerantesActive(false)
            setTagSucosActive(false)
            setTagCervejasActive(false)
        } else if ( id === 1 ) {
            setTagLanchesActive(false)
            setTagMolhosActive(true)
            setTagPorcoesActive(false)
            setTagDocesActive(false)
            setTagRefigerantesActive(false)
            setTagSucosActive(false)
            setTagCervejasActive(false)
        } else if ( id === 2 ) {
            setTagLanchesActive(false)
            setTagMolhosActive(false)
            setTagPorcoesActive(true)
            setTagDocesActive(false)
            setTagRefigerantesActive(false)
            setTagSucosActive(false)
            setTagCervejasActive(false)
        } else if ( id === 3 ) {
            setTagLanchesActive(false)
            setTagMolhosActive(false)
            setTagPorcoesActive(false)
            setTagDocesActive(true)
            setTagRefigerantesActive(false)
            setTagSucosActive(false)
            setTagCervejasActive(false)
        } else if ( id === 4 ) {
            setTagLanchesActive(false)
            setTagMolhosActive(false)
            setTagPorcoesActive(false)
            setTagDocesActive(false)
            setTagRefigerantesActive(true)
            setTagSucosActive(false)
            setTagCervejasActive(false)
        } else if ( id === 5 ) {
            setTagLanchesActive(false)
            setTagMolhosActive(false)
            setTagPorcoesActive(false)
            setTagDocesActive(false)
            setTagRefigerantesActive(false)
            setTagSucosActive(true)
            setTagCervejasActive(false)
        } else if ( id === 6 ) {
            setTagLanchesActive(false)
            setTagMolhosActive(false)
            setTagPorcoesActive(false)
            setTagDocesActive(false)
            setTagRefigerantesActive(false)
            setTagSucosActive(false)
            setTagCervejasActive(true)
        }
    }

    return (
        <MainContainer>
            <ScrollDiv >
                <OpacityBackground 
                className={hidden ? '' : 'showBackground'}
                onClick={() => setHidden(!hidden)}
                />
                <ScrollTags className={hidden ? 'hidden' : 'show'}>
                    <p 
                    onClick={() => {
                        toggleMenu(0)
                        setHidden(true)}
                    }
                    className={tagLanchesActive ? 'active' : ''}>LANCHES</p>
                    <p            
                    onClick={() => {
                        toggleMenu(1)
                        setHidden(true)}
                    }
                    className={tagMolhosActive ? 'active' : ''}>MOLHOS</p>
                    <p            
                    onClick={() => {
                        toggleMenu(2)
                        setHidden(true)}
                    }
                    className={tagPorcoesActive ? 'active' : ''}>PORÇÕES</p>
                    <p            
                    onClick={() => {
                        toggleMenu(3)
                        setHidden(true)}
                    }
                    className={tagDocesActive ? 'active' : ''}>DOCES E SOBREMESAS</p>
                    <p            
                    onClick={() => {
                        toggleMenu(4)
                        setHidden(true)}
                    }
                    className={tagRefigerantesActive ? 'active' : ''}>REFRIGERANTES</p>
                    <p            
                    onClick={() => {
                        toggleMenu(5)
                        setHidden(true)}
                    }
                    className={tagSucosActive ? 'active' : ''}>SUCOS</p>
                    <p            
                    onClick={() => {
                        toggleMenu(6)
                        setHidden(true)}
                    }
                    className={tagCervejasActive ? 'active' : ''}>CERVEJAS</p>
                </ScrollTags>
                <ScrollMobile 
                onClick={() => setHidden(!hidden)}
                className={hidden ? '' : 'hidden'}>
                <i className={hidden ? 'fa-solid fa-bars' : ''}></i>
                </ScrollMobile>
            </ScrollDiv>
            <SelectedMenuBG>
                <SelectedMenu>
                    <Lanches tagLanchesActive={tagLanchesActive}/>
                    <Molhos tagMolhosActive={tagMolhosActive}/>
                    <Porcoes tagPorcoesActive={tagPorcoesActive}/>
                    <Doces tagDocesActive={tagDocesActive}/>
                    <Refrigerantes tagRefigerantesActive={tagRefigerantesActive}/>
                    <Sucos tagSucosActive={tagSucosActive}/>
                    <Cervejas tagCervejasActive={tagCervejasActive}/>
                </SelectedMenu>
            </SelectedMenuBG>
        </MainContainer>

    )
}

export default Menu