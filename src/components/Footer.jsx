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

import Item from "./Item";



export default function Footer(){
    return(
        

        <div className="fixed bottom-0">
            <ul className="flex flex-row">
                <Item src={dave} right='r-0' left='l-0' top='t-0' index='z-0'/>
                <Item src={bowie} right='' left='' top='top-[1rem]' index='z-0'/>
                <Item src={red} right='' left='-l-[1rem]' top='' index='z-1'/>
                <Item src={lana} right={0} left={0} top={0} index={0}/>
                <Item src={amy} right={0} left={0} top={0} index={0}/>
                <Item src={oasis} right={0} left={0} top={0} index={0}/>
                <Item src={billiejoe} right={0} left={0} top={0} index={0}/>
                <Item src={marilyn} right={0} left={0} top={0} index={0}/>
                <Item src={harry} right={0} left={0} top={0} index={0}/>
                <Item src={riri} right={0} left={0} top={0} index={0}/>
                <Item src={badbunny} right={0} left={0} top={0} index={0}/>
                <Item src={billie} right={0} left={0} top={0} index={0}/>
                <Item src={kanye} right={0} left={0} top={0} index={0}/>
                <Item src={michael} right={0} left={0} top={0} index={0}/>
                <Item src={youngblud} right={0} left={0} top={0} index={0}/>
                <Item src={nirvana} right={0} left={0} top={0} index={0}/>
                <Item src={elton} right={0} left={0} top={0} index={0}/>
                <Item src={charly} right={0} left={0} top={0} index={0}/>
                <Item src={metallica} right={0} left={0} top={0} index={0}/>
                <Item src={eminem} right={0} left={0} top={0} index={0}/>
                <Item src={miloj} right={0} left={0} top={0} index={0}/>
                <Item src={pity} right={0} left={0} top={0} index={0}/>
                <Item src={roger} right={0} left={0} top={0} index={0}/>

            </ul>
        </div>
            
        
    )
}