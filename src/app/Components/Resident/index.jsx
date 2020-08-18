import React from 'react';

const resident = props => {
  return (
    <div>
      <div className="lbh-container row details" data-test="residents-fullName">
        <a href="www.hackney.gov.uk">{props.fullName}</a>
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
      <div className="lbh-container row details" data-test="residents-homeNum">
        <p>Home: {props.homeNum}</p>
      </div>
      <div className="lbh-container row details" data-test="residents-workNum">
        <p>Work: {props.workNum}</p>
      </div>
      <div className="lbh-container row details" data-test="residents-email">
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default resident;
