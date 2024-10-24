import React from "react";
import dave from '../assets/img/covers/davegrohl.svg';
import bowie from '../assets/img/covers/bowie.svg';
import red from '../assets/img/covers/red.svg';
import lana from '../assets/img/covers/lana.svg';
import amy from '../assets/img/covers/amy.svg';
import oasis from '../assets/img/covers/oasis.svg';
import billiejoe from '../assets/img/covers/billiejoe.svg';
import marilyn from '../assets/img/covers/marilyn.svg';
import harry from '../assets/img/covers/harry.svg';
import riri from '../assets/img/covers/riri.svg';
import badbunny from '../assets/img/covers/badbunny.svg';
import billie from '../assets/img/covers/billieilish.svg';
import kanye from '../assets/img/covers/kanye.svg';
import michael from '../assets/img/covers/michael.svg';
import youngblud from '../assets/img/covers/youngblud.png';
import nirvana from '../assets/img/covers/nirvana.png';
import elton from '../assets/img/covers/eltonlana.png';
import charly from '../assets/img/covers/charly.png';
import metallica from '../assets/img/covers/metallica.png';
import eminem from '../assets/img/covers/eminem.png';
import miloj from '../assets/img/covers/miloj.png';
import pity from '../assets/img/covers/pity.png';
import roger from '../assets/img/covers/roger.png';
import dave2 from '../assets/img/covers/dave.png';
import cure from '../assets/img/covers/thecure.png';

import Item from "./Item";



export default function Footer(){
    return(
        

        <div className="fixed bottom-0">
            <ul className="flex flex-row items-baseline">
                <Item src={dave} />
                <Item src={bowie} />
                <Item src={red}/>
                <Item src={lana} />
                <Item src={amy} />
                <Item src={oasis} />
                <Item src={billiejoe} />
                <Item src={marilyn} />
                <Item src={harry} />
                <Item src={riri} />
                <Item src={badbunny} />
                <Item src={billie} />
                <Item src={kanye} />
                <Item src={michael} />
                <Item src={youngblud} />
                <Item src={nirvana} />
                <Item src={elton} />
                <Item src={charly} />
                <Item src={metallica} />
                <Item src={eminem} />
                <Item src={miloj} />
                <Item src={pity} />
                <Item src={roger} />
                <Item src={dave2} />
                <Item src={cure} />

            </ul>
        </div>
            
        
    )
}