import React, { Component } from 'react';

export default class Benefits extends Component {
  render() {
    return (
      <div className="quick-access__item">
        <h3>Benefits</h3>
        <table>
          <tbody>
            <tr>
              <td>Income:</td>
              <td></td>
            </tr>
            <tr>
              <td>Weekly:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="quick-access__item__links">
          <ul>
            <li>
              <a href="#/">More details</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
