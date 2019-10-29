import React, { Component } from 'react';

export default class CouncilTax extends Component {
  render() {
    return (
      <div className="quick-access__item">
        <h3>Council Tax</h3>
        <table>
          <tbody>
            <tr>
              <td>Reference:</td>
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
