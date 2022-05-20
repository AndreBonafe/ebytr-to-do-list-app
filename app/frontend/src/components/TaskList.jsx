import React, { useState, useEffect } from 'react';
import requestData from  '../services/request';


const TaskList = () => {
  const [Tasks, setTasks] = useState([]);

  const getTasks = (endpoint) => requestData(endpoint)
    .then((response) => setTasks(response.data))
    .catch((error) => console.log(error));

  // useEffect(() => {
  //   const apiTasks = '/tasks';

  //   getTasks(apiTasks);
  // });

  useEffect(() => {
    const endpoint = '/tasks';

    if (Tasks.length === 0) {
      getTasks(endpoint);
    }
  }, [Tasks]);

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
              <li key={ e.taskId }>{e.taskName}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TaskList
