import React from 'react';
import { FaSpinner } from 'react-icons/fa';
function Spinner() {
  return <FaSpinner style={{ margin: 'auto', display: 'block' }} icon='spinner' alt='Loading...' className='spinner' size={100} />;
}

export default Spinner;
