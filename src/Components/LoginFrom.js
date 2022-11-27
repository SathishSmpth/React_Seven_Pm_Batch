import React, { Component } from "react";

class LoginFrom extends Component {

    state={
      
    }

    Submit =(e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    setValue=(e)=>{
        const name=e.target.name
        const value=e.target.value

        this.setState({
            ...this.state,
            [name]:value
        })
    }



  render() {
    return (
      <div class="container p-9">
        <form>
            <label>Email</label>


            <input 
            name="username"
            type="email" 
            placeholder="Email" 
            onChange={this.setValue}
            value={this.state.username}
            /><br></br>



            <label>Password</label>


            <input
            name="password" 
            type="password" 
            placeholder="Password"
            onChange={this.setValue}
            value={this.state.password} 
            />


            <input type="submit" onClick={this.Submit} value="Login"/>


        </form>
      </div>
    );
  }
}

export default LoginFrom;
