import React from 'react';
import moment from 'moment';
import './index.scss';

export default props => {
  const { tasks } = props;

  return (
    <div className="details__left-column__item tenancyDetails">
      <h2>Tenancy processes and actions</h2>
      <ul>
        {tasks.map((task, index) => {
          return (
            task.type && (
              <li key={`${index}-task`}>
                <strong>
                  {moment(task.createdTime).format('DD/MM/YYYY')}:{' '}
                </strong>
                {task.type} {task.completedTime === null && '(In progress)'}
                {task.completedTime && '(Completed)'}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
