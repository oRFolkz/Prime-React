import React, { useState } from "react"
import { BannerDiv, BannerTxt, OpenClosedTxt, Time } from "./style.ts"
import capa from '../../Imgs/capa.jpg'
import logo from '../../Imgs/logo.webp'

function Banner() {

    const [ open, setOpen ] = useState(true);
    return (
        <BannerDiv>
            <img src={capa} alt="Capa" className="backgroundImg"/>
            <BannerTxt>
                <img src={logo} alt="Capa" />
                <h1>PRIME BURGER</h1>
                <OpenClosedTxt
                onClick={() => (setOpen(!open))}
                className={open ? 'open' : 'closed'}>
                {open ? 'Aberto para pedidos' : 'Fechado para pedidos'}
                </OpenClosedTxt>
                <Time><i className="fa-regular fa-clock"></i><span>Aberto : </span>18:00 até 00:00 
                </Time>
            </BannerTxt>
        </BannerDiv>
    )
}

export default Banner