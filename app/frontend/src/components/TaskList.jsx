import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import requestData from  '../services/request';


const TaskList = ({ filter }) => {
  const [Tasks, setTasks] = useState([]);

  const getTasks = (endpoint) => requestData(endpoint)
    .then((response) => {
      if (filter !== '') setTasks(response.data.filter((e) => e.status === filter));
      else  setTasks(response.data);
    }).catch((error) => console.log(error));

  useEffect(() => {
    const endpoint = '/tasks';

    if (Tasks.length === 0) {
      getTasks(endpoint);
    }

    if (filter !== '') {
      getTasks(endpoint)
    }
    console.log('a')
  }, [filter]);

  if (!Tasks.length) {
    return (<h1> LOADING... </h1>)
  }

  return (
    <div>
      <h1>To do List:</h1>
      <ul>
        {
          Tasks.map((e) => {
            return (
              <li key={ e.taskId }>{`${e.taskName} ${e.status}`}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

TaskList.propTypes = {
  filter: PropTypes.string,
}

export default TaskList
