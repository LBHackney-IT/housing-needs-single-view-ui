import React from 'react';
import moment from 'moment';
import './index.scss';

export default props => {
  return (
    <div id="household-members-container" className="household-members">
      <h2>Household members</h2>
      <table id="household-members">
        <tr>
          <th>Name</th>
          <th>Relationship</th>
          <th>Date of Birth</th>
        </tr>
        {props.members.map((member, index) => {
          return (
            <tr key={index}>
              <td>
                {member.title} {member.firstName} {member.lastName}
              </td>
              <td>{member.relationship}</td>
              <td>{moment(member.dateOfBirth).format('DD/MM/YYYY')}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
