import React from 'react';
import { useState } from 'react';
import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method || 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };

  const handleMethod = (e) => {
    setMethod(e.target.value);
  }


  return (
    <>
      <div className='formBox'>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button className='allButtons' type="submit">GO!</button>
          </label>
          <label className="methods">
            <button className='allButtons' id="get" onClick={handleMethod}>GET</button>
            <button className='allButtons' id="post" onClick={handleMethod}>POST</button>
            <button className='allButtons' id="put" onClick={handleMethod}>PUT</button>
            <button className='allButtons' id="delete" onClick={handleMethod}>DELETE</button>
          </label>
        </form>
      </div>
    </>
  );
};


export default Form;
