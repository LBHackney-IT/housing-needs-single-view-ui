import React from 'react';
import moment from 'moment';
import './index.scss';
import { isMemberOfGroups } from '../../../lib/Cookie';

export default props => {
  const { tasks } = props;

  if (tasks.length > 0) {
    return (
      <>
        <h2>Tenancy processes and actions</h2>
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th scope="col" className="govuk-table__header">
                Date
              </th>
              <th scope="col" className="govuk-table__header">
                Type
              </th>
              <th scope="col" className="govuk-table__header">
                State
              </th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            {tasks.map((task, index) => {
              return (
                task.type && (
                  <tr
                    className="govuk-table__row"
                    key={`${index}-key`}
                    data-testid={`task-row-${index}`}
                  >
                    <td className="govuk-table__cell">
                      {moment(task.createdTime).format('DD/MM/YYYY')}:{' '}
                    </td>

                    <td className="govuk-table__cell">
                      {isMemberOfGroups([
                        'HOUSING_OFFICER',
                        'AREA_HOUSING_MANAGER',
                        'DEV_TEAM'
                      ]) ? (
                        <a
                          href={`${process.env.REACT_APP_MANAGE_A_TENANCY_APP_URL}/tasks/${task.id}`}
                        >
                          {task.type}{' '}
                        </a>
                      ) : (
                        task.type + ' '
                      )}
                    </td>

                    <td className="govuk-table__cell">
                      {task.completedTime === null && '(In progress)'}
                      {task.completedTime && '(Completed)'}
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  return <h2>There are no tasks</h2>;
};
