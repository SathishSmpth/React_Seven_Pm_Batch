import React from "react";

class ClickEvent extends React.Component {
    
    state={
        count:0
    }
    ClickMe=()=>{
        const randomNumber = Math.floor(Math.random()*100)
        this.setState({count:randomNumber})
    }

    render(){
        return(
            <div>
                <button onClick={this.ClickMe}>Click to Increase</button>
                <div>No.of.clicks:{this.state.count}</div>
            </div>
        );
    }
}

export default ClickEvent;