import React, { Component, Fragment } from "react";

export default class TenancyDetails extends Component {
  render() {
    return (
      <div className="details__left-column__item">
        <h2>Tenancy Details</h2>
        <table>
          <tbody>
            <tr>
              <td>Known addresses:</td>
              <td>
                {this.props.customer.address ? (
                  this.props.customer.address.split("\n").map((line, i) => {
                    return (
                      <Fragment key={i}>
                        {line}
                        <br />
                      </Fragment>
                    );
                  })
                ) : (
                  <p>No data</p>
                )}
              </td>
            </tr>
            
              <tr>
                <td>Household member(s):</td>
                <td>
                {this.props.customer.household.length > 0 ? (
                  <ul>
                    {this.props.customer.household.map((p, i) => {
                      return (
                        <li key={i}>
                          {p.name} <br />
                          {p.relationship} {p.dob}
                        </li>
                      );
                    })}
                  </ul>) : (<p>No data</p>)}
                </td>
              </tr>
      
          </tbody>
        </table>
      </div>
    );
  }
}
