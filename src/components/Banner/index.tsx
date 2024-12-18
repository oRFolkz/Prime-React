import React, { useEffect, useState } from "react"
import { BannerDiv, BannerTxt, OpenClosedTxt, Time } from "./style.ts"

import capa from '../../imgs/capa.jpg'
import logo from '../../imgs/logo.webp'

function Banner() {

    const [timeHrs, setTimeHrs] = useState(Number);
    const [timeMin, setTimeMin] = useState(Number);

    useEffect(() => {
        const fetchTime = () => {
            fetch('https://worldtimeapi.org/api/timezone/America/Sao_Paulo')
                .then((res) => res.json())
                .then((data) => {
                    const dateTime = data.datetime;
                    const [hours, minutes] = dateTime.split("T")[1].split(":");
                    setTimeHrs(hours);
                    setTimeMin(minutes);
                })
                .catch((error) => {
                    console.error("Error fetching time:", error);
                });
        };
        fetchTime();
        const interval = setInterval(fetchTime, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <BannerDiv>
            <img src={capa} alt="Capa" className="backgroundImg"/>
            <BannerTxt>
                <img src={logo} alt="Capa" />
                <h1>PRIME BURGER</h1>
                <OpenClosedTxt
                className={timeHrs < 18 ? 'closed' : 'open'}>
                {timeHrs < 18 ? (`Abre em :  ${(17 - timeHrs)}:${60 - timeMin}hrs`) : 'Aberto para pedidos' }
                </OpenClosedTxt>
                <Time><i className="fa-regular fa-clock"></i><span>Aberto : </span>18:00 até 00:00 
                </Time>
            </BannerTxt>
        </BannerDiv>
    )
}

export default Banner