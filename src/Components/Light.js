import React,{useState} from "react";
import "./Light.css";

const Light=()=>{

    const [onoff1,setOnOff1]= useState(false);
    const [onoff2,setOnOff2]= useState(false);
    
    const toggle1=()=>{
        onoff1 ? setOnOff1(false) : setOnOff1(true);
    }
    const toggle2=()=>{
        onoff2 ? setOnOff2(false) : setOnOff2(true);
    }

    return(
        <div className="box">
            <div className={onoff1 ? "circle1style" : "circle1"} ></div>
            <div className={onoff2 ? "circle2style" : "circle2"} ></div>
            <input onClick={toggle1} className="btn1" value={onoff1 ? 'On' : 'Off'} type='button'/>
            <input onClick={toggle2} className="btn2" value={onoff2 ? 'On' : 'Off'} type='button'/>
        </div>
    );
}

export default Light;