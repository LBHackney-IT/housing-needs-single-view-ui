import React from 'react';
import moment from 'moment';
import './index.scss';

export default props => {
  return (
    <div className="tenant">
      <a
        className="tenant-fullname"
        href={`/search?firstName=${props.firstName}&lastName=${props.lastName}`}
        data-test="tenant-fullname-link"
      >
        {props.title} {props.firstName} {props.lastName}
      </a>
      <p data-test="tenant-dob">
        Date of birth: {moment(props.dateOfBirth).format('DD/MM/YYYY')}
      </p>
      <p data-test="tenant-mobileNum">Mobile: {props.telephone1}</p>
      <p data-test="tenant-homeNum">Home: {props.telephone2}</p>
      <p data-test="tenant-workNum">Work: {props.telephone3}</p>

      <p data-test="tenant-email">
        Email:{' '}
        {props.emailAddress ? (
          <a href={`mailto:${props.emailAddress}`}>{props.emailAddress}</a>
        ) : null}
      </p>
    </div>
  );
};
