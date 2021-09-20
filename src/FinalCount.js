import React from "react";
import { Component } from "react/cjs/react.production.min";

export default class FinalCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ count: this.state.count - 1 })
                }}>-</button>
                <label>{this.state.count}</label>
                <button onClick={() => {                    
                    this.setState(ps=>{
                       return {count: ps.count + 1}
                    })
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>+</button>
            </div>
        )
    }
}


/*
import { useState } from "react";

export default function FinalCount({initCount}){
    const [count,setCount]=useState(initCount);
    const[state,setState]=useState({count:initCount});
    return(
        <div>
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <label>{state.count}</label>
            <button onClick={()=>setCount(ps=>ps+1)}>+</button>
            <button onClick={()=>setState(ps=>{return {count:ps.count+1}})}>+</button>
        </div>
    )
}*/