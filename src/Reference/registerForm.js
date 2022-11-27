import React from "react";

class RegisterFrom extends React.Component {
    loadData=false;
    state={
    userData:{
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      state: "",
      pin: "",
    },
  userDetail:[
    {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      password: "",
      gender: "",
      city: "",
      state: "",
      pin: "",
    },
  ]
}

  setRegisterValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
    userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  printRegisterValue = (e) => {
    this.state.userDetail.push(this.state.userData);
    console.log(this.state.userDetail);
    this.setState({userDetail:this.state.userDetail})
    this.setState(this.loadData=true)
  };

  render() {
    return (
      <div className="container-fluid p-3">
        <h1 className="text-center">Register From</h1>
        <div className="row g-3 form">
          <div className="row g-3 ">
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
                value={this.state.userData.firstName}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={this.state.userData.lastName}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="dateOfBirth"
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                value={this.state.userData.dateOfBirth}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="phoneNumber"
                type="number"
                className="form-control"
                placeholder="Phone number"
                value={this.state.userData.phoneNumber}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.userData.email}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.userData.password}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="gender"
                type="text"
                className="form-control"
                placeholder="Gender"
                value={this.state.userData.gender}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="city"
                type="text"
                className="form-control"
                placeholder="City"
                value={this.state.userData.city}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="state"
                type="text"
                className="form-control"
                placeholder="State"
                value={this.state.userData.state}
              />
            </div>
            <div className="col-md-6">
              <input
                onChange={this.setRegisterValue}
                name="pin"
                type="Number"
                className="form-control"
                placeholder="Pin"
                value={this.state.userData.pin}
              />
            </div>
            <div className="col-md-6 ">
              <input
                onChange={this.setRegisterValue}
                type="submit"
                className="form-control bg-primary text-light"
                value="Register"
                onClick={this.printRegisterValue}
              />
            </div>
          </div>
        </div>
        {this.loadData && 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Gender</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Pin</th>
            </tr>
          </thead>
          <tbody>
          {this.state.userDetail.map((data,i)=>
          <tr>
            <td>{i+1}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.dateOfBirth}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.gender}</td>
            <td>{data.city}</td>
            <td>{data.state}</td>
            <td>{data.pin}</td>
          </tr>
          )}</tbody>
        </table>}
      </div>
    );

  }
}

export default RegisterFrom;
