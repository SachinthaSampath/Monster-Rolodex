import React, { useState,useContext } from "react";
import { ThemeContext } from "./App";

export default function NewCounterHooks({ init }) {
    console.log("Render Counter Hooks");
    const [state, setState] = useState({ count: init });
    const [count,setCount] = useState(init);
    const style = useContext(ThemeContext);
    return (
        <div>
            <button style={style} onClick={() => setCount(ps=>ps-1)}>-</button>
            <span>{count}</span>
            <button onClick={() =>setCount(ps=>ps+1)}>+</button>
        </div>
    )
    function setCountOld(n) {
        setState(ps=>{return {count:ps.count+n}});
        setState(ps=>{return {count:ps.count+n}});
    }
}
