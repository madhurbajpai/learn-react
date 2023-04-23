import { useState } from 'react';
import './Card.css'

const Card = () => {
    const [temp, setTemp] = useState(0);
    const [color, setColor] = useState("hot");

    function inc(){
        const newtemp = temp + 1;
        if(temp === 30) return;
        if(newtemp > 0 && newtemp <= 20){
            setColor("mod");
        }
        else if(newtemp > 20){
            setColor("hot");
        }
        else{
            setColor("cold");
        }
        setTemp(newtemp);
    }

    function dec(){
        const newtemp = temp - 1;
        if(newtemp === -11) return ;
        if(newtemp > 0 && newtemp <= 20){
            setColor("mod");
        }
        else if(newtemp > 20){
            setColor("hot");
        }
        else{
            setColor("cold");
        }
        setTemp(newtemp);
    }
    
    return (
        <div className='main-card'>
            <div className="content">
                <div className={`temp ${color}`}><span>{temp}<sup>o</sup>C</span></div>
                <div className="btns">
                    <button className="plus" onClick={inc}>+</button>
                    <button className="minus" onClick={dec}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Card;