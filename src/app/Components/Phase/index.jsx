import React, { Component } from 'react';

export default class Phase extends Component {
  render() {
    return (
      <div className="govuk-phase-banner lbh-phase-banner lbh-container">
        <div hidden>
          <span id="new-tab">Opens in a new tab</span>
        </div>
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag">
            Alpha
          </strong>
          <span className="govuk-phase-banner__text">
            This is a new service - your{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgiT3dktz647tu0T1MMAmoQwI0CvdIdIR6zQPB7Cyo0-mIqg/viewform"
              target="_blank"
              rel="noreferrer noopener"
              aria-describedby="new-tab"
            >
              feedback
              <img src="/assets/images/new-tab.png" alt="" width="10" />
            </a>{' '}
            will help us to improve it.
          </span>
        </p>
      </div>
    );
  }
}
