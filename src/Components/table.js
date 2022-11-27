import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
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
            {this.userDetail.map((data,i)=>
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
          </table>
        );
    }
}

export default Table;