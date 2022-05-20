import React, { useState } from 'react';
import OrderButtons from '../components/OrderButtons';
import TaskList from '../components/TaskList';

const Home = () => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <OrderButtons filterFunction={setFilter}/>
      <TaskList filter={filter}/>
    </>
  )
}

export default Home