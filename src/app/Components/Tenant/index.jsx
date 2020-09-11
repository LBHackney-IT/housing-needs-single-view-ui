import React from 'react';
import './index.scss';

const tenant = props => {
  return (
    <div className="lbh-container">
      <div className="tenant-container">
        <div
          id="tenant-fullname-container"
          className="lbh-container row details"
          data-test="tenants-fullName"
        >
          <a
            id="tenant-fullname-link"
            href={`/search?firstName=${props.forename}&lastName=${props.surname}`}
            className="linkStyle"
            data-test="tenant-fullname-link"
          >
            {props.title} {props.forename} {props.surname}
          </a>
        </div>
        <div className="lbh-container row details" data-test="tenant-dob">
          <p>Date of birth: {props.dob}</p>
        </div>
        <div className="lbh-container row details" data-test="tenant-mobileNum">
          <p>Mobile: {props.mobileNum}</p>
        </div>
        <div className="lbh-container row details" data-test="tenant-homeNum">
          <p>Home: {props.homeNum}</p>
        </div>
        <div className="lbh-container row details" data-test="tenant-workNum">
          <p>Work: {props.workNum}</p>
        </div>
        <div
          id="tenant-email"
          className="lbh-container row details"
          data-test="tenant-email"
        >
          <p>
            Email:
            <a
              id="tenant-email-link"
              href={`mailto:${props.email}`}
              className="linkStyle"
            >
              {props.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default tenant;
