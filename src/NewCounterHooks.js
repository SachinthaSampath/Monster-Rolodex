import React, { useState } from "react";

export default function NewCounterHooks({ init }) {
    console.log("Render Counter Hooks");
    const [state, setState] = useState({ count: init });
    const [count,setCount] = useState(init);
    return (
        <div>
            <button onClick={() => setCount(ps=>ps-1)}>-</button>
            <span>{count}</span>
            <button onClick={() =>setCount(ps=>ps+1)}>+</button>
        </div>
    )
    function setCountOld(n) {
        setState(ps=>{return {count:ps.count+n}});
        setState(ps=>{return {count:ps.count+n}});
    }
}
