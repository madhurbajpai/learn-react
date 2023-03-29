import './App2.css'
import React, {useState} from 'react';

function App2(){

    let n = 0;
    const [num, setNum] = useState(n);

    function inc(){
        setNum(num+1);
    }

    function dec(){
        setNum(num-1);
    }

    return (
        <div className="m">
            <h1 className='head'>useStateHook</h1>
            <div className="main">
                <h1 className="num" style={{fontSize: "60px",color: "green"}}>{num}</h1>
                <div className="btns">
                    <button className="btn" onClick={inc}>increment</button>
                    <button className="btn" onClick={dec}>decrement</button>
                </div>
            </div>
        </div>
    )
};

export default App2;