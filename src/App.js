import React from 'react';
import { useReducer, useEffect } from 'react';
import { initialState, reducer } from './reducers/reducer';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const callApi = async (requestParams) => {
  //   setRequestParams(requestParams);
  // }

  useEffect(() => {
    let fetch = async () => {
      let result = await axios(state.requestParams);
      console.log(result);
      const data = {
        header: result.headers,
        data: result.data
      };
      updateLoading(false);
      setData(data);
      updateHistory(state.requestParams, data);
    }
    if (state.requestParams && state.requestParams.method) fetch();
  }, [state.requestParams])

  function setReqParams(requestParams) {
    dispatch({
      type: 'SET_REQ_PARAMS',
      payload: requestParams,
    });
  }
  function updateLoading(status) {
    dispatch({
      type: 'UPDATE_LOADING',
      payload: status,
    });
  }
  function setData(data) {
    dispatch({
      type: 'SET_DATA',
      payload: data,
    });
  }

  function updateHistory(requestParams, data) {
    let reqHistory = {
      method: requestParams.method,
      url: requestParams.url,
      data: data
    }
    dispatch({
      type: 'UPDATE_HISTORY',
      payload: reqHistory
    });
  }

  function callApi(requestParams) {
    updateLoading(true);
    setReqParams(requestParams);
  }

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <History history={state.history} />
      <Footer />
    </>
  );
};


export default App;
