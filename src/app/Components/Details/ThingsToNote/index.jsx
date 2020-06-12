import React, { useState, useCallback } from 'react';
import CreateVulnerability from '../../../Gateways/CreateVulnerability';

const ThingsToNote = ({ customerId }) => {
  const [state, setState] = useState({
    loading: false,
    error: null
  });

  const createSnapshot = useCallback(async () => {
    setState({ ...state, loading: true });
    try {
      const { location } = await CreateVulnerability({ customerId });
      setState({ ...state, loading: false });
      window.location.href = location;
    } catch (error) {
      setState({ loading: false, error });
    }
  }, [state, customerId]);

  return (
    <div className="details__left-column__item">
      <h2>Things to note</h2>
      <table>
        <tbody>
          <tr>
            <th>Vulnerabilities</th>
            <td>None captured</td>
          </tr>
          <tr>
            <th>Strengths / assets</th>
            <td>None captured</td>
          </tr>
        </tbody>
      </table>

      <button
        class="govuk-button lbh-button"
        onClick={createSnapshot}
        disabled={state.loading}
      >
        Add a vulnerability snapshot
      </button>
      {state.error && <span>{state.error}</span>}
    </div>
  );
};

export default ThingsToNote;
