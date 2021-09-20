import react, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: props.initialCount,
            test: "test value"
        }
    }

    render() {
        console.log("Render Counter");
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style}  onClick={() => this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
    changeCount(amount) {
        //this.setState(prevState=>{count:this.state.count+amount}); 
    }
}