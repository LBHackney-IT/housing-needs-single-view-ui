import React from 'react';
import moment from 'moment';
import './index.scss';
import { isMemberOfGroups } from '../../../lib/Cookie';

export default props => {
  const { tasks } = props;

  return (
    <div className="details__left-column__item tenancyDetails">
      <h2>Tenancy processes and actions</h2>
      <ul>
        {tasks.map((task, index) => {
          return (
            task.type && (
              <li data-testid="task-row" key={`${index}-task`}>
                <strong>
                  {moment(task.createdTime).format('DD/MM/YYYY')}:{' '}
                </strong>
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
                {task.completedTime === null && '(In progress)'}
                {task.completedTime && '(Completed)'}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
