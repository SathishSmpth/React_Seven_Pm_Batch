import React from "react";
import SimpleReactValidator from "simple-react-validator";

class RegisterFrom extends React.Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator();
  }
  loadData = false;
  state = {
    userData: {
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
    userDetail: [
      {
        firstName: "sathish",
        lastName: "s",
        dateOfBirth: "13-23-22",
        phoneNumber: "12",
        email: "fgngh",
        password: "ghghghgh",
        gender: "ghghgh",
        city: "hjtt",
        state: "satae",
        pin: "dggh",
      },
    ],
  };

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
    if (this.validator.allValid()) {
      this.state.userDetail.push(this.state.userData);
      this.setState({ userDetail: this.state.userDetail });
      console.log(this.state.userDetail);
      this.setState((this.loadData = true));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
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
              {this.validator.message(
                "firstName",
                this.state.userData.firstName,
                "required|alpha"
              )}
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
              {this.validator.message(
                "LastName",
                this.state.userData.lastName,
                "required|alpha"
              )}
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
              {/* {this.validator.message(
                "date of birth",
                this.state.userData.dateOfBirth,
                "required|date"
              )} */}
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
              {this.validator.message(
                "Phone number",
                this.state.userData.phoneNumber,
                "required|numeric"
              )}
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
              {this.validator.message(
                "email",
                this.state.userData.email,
                "required|email"
              )}
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
              {this.validator.message(
                "password",
                this.state.userData.password,
                "required|alpha_num_dash_space"
              )}
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
              {this.validator.message(
                "gender",
                this.state.userData.gender,
                "required|alpha"
              )}
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
              {this.validator.message(
                "city",
                this.state.userData.city,
                "required|alpha"
              )}
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
              {this.validator.message(
                "state",
                this.state.userData.state,
                "required|alpha"
              )}
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
              {this.validator.message(
                "pin",
                this.state.userData.pin,
                "required|numeric"
              )}
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
            {this.state.userDetail.map((data, i) => (
              <tr>
                <td>{i + 1}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RegisterFrom;
