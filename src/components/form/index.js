import React from 'react';

import './form.scss';

const Form = (props) => {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
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
            <button className='allButtons' id="get">GET</button>
            <button className='allButtons' id="post">POST</button>
            <button className='allButtons' id="put">PUT</button>
            <button className='allButtons' id="delete">DELETE</button>
          </label>
        </form>
      </div>
    </>
  );
};


export default Form;
