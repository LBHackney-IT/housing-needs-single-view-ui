import React from 'react';
import './index.scss';

const resident = props => {
  return (
    <div className="lbh-container">
      <div className="resident-container">
        <div
          id="resident-fullname-container"
          className="lbh-container row details"
          data-test="residents-fullName"
        >
          <a id="resident-fullname-link" href="www.hackney.gov.uk">
            {props.fullName}
          </a>
        </div>
        <div className="lbh-container row details" data-test="residents-dob">
          <p>Date of birth: {props.dob}</p>
        </div>
        <div
          className="lbh-container row details"
          data-test="residents-mobileNum"
        >
          <p>Mobile: {props.mobileNum}</p>
        </div>
        <div
          className="lbh-container row details"
          data-test="residents-homeNum"
        >
          <p>Home: {props.homeNum}</p>
        </div>
        <div
          className="lbh-container row details"
          data-test="residents-workNum"
        >
          <p>Work: {props.workNum}</p>
        </div>
        <div
          id="resident-email"
          className="lbh-container row details"
          data-test="residents-email"
        >
          <p>
            Email:
            <a id="resident-email-link" href={`mailto:${props.email}`}>
              {props.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default resident;
