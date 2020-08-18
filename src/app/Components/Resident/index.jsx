import React from 'react';

const resident = (props) => {
  return (
    <div>
      <div
        className="lbh-container row details"
        data-test="residents-full-name"
      >
        <a href="www.hackney.gov.uk">
          {props.fullName}
        </a>
      </div>
      <div className="lbh-container row details" data-test="residents-heading">
        <p>Date of birth: {props.dob}</p>
      </div>
      <div className="lbh-container row details" data-test="residents-heading">
        <p>Mobile: {props.mobileNum}</p>
      </div>
      <div className="lbh-container row details" data-test="residents-heading">
        <p>Home: {props.homeNum}</p>
      </div>
      <div className="lbh-container row details" data-test="residents-heading">
        <p>Work: {props.workNum}</p>
      </div>
      <div className="lbh-container row details" data-test="residents-heading">
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default resident;
