import React from "react";
import { Component } from "react";

export default class NewCounter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:props.init
        }
    }
    render(){
        console.log("Render New Counter");
        return(
            <div>
                <button onClick={()=>this.changeCount(-1)}>-</button>
                <label>{this.state.count}</label>
                <button onClick={()=>this.changeCount(+1)}>+</button>
            </div>
        )
    }

    changeCount(count){
        this.setState({count:this.state.count+count});
    }
}