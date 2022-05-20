import PropTypes from 'prop-types';
import React from 'react';


const OrderButtons = ({ filterFunction }) => {
  return (


    <div>
      <h3> Filtrar por: </h3>
      <button type='button' onClick={
        () => filterFunction('pending')
      }> Pendentes: </button>
      <button type='button' onClick={
        () => filterFunction('in-progress')
      }> Em Progresso: </button>
      <button type='button' onClick={
        () => filterFunction('done')
      }> Feitas: </button>
    </div>
  )
}

OrderButtons.propTypes = {
  filterFunction: PropTypes.func,
}

export default OrderButtons
