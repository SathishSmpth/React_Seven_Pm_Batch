import React, { Component } from "react";
import { Link } from "react-router-dom";

class cards extends Component {
  state={
    clicks:0,
    remainingClicks:100
  }


  clickMe=()=>{
    this.setState(
      {
        clicks:this.state.clicks+1 ,
        remainingClicks:this.state.remainingClicks-1
      }
    )
  }
  render() {
    return (
      <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={this.props.image} onClick={this.clickMe} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            No.of Clicks:{this.state.clicks}
          </p>
          <p className="card-text">
            No.of Remaining Clicks:{this.state.remainingClicks}
          </p>
          <Link to={this.props.link} className="btn btn-primary">
            Click
          </Link>
        </div>
      </div>
    </div>
    );
  }
}

export default cards;
