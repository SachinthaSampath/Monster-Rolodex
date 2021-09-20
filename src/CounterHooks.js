import React,{useContext, useState} from "react";
import { ThemeContext } from "./App";

function CounterHooks({initialCount}) {
    console.log("Render counter hookd");    
    const [state,setState]=useState({count:initialCount});
    const style =useContext(ThemeContext);
    return (
        <div>
            <button style={style} onClick={()=>{setState(ps=>{ return {count:ps.count-1}})}}>-</button>
            <span>{state.count}</span>
            <button  style={style}  onClick={()=>{setState({count:state.count+1})}} >+</button>
        </div>
    )
    
}

export default CounterHooks;