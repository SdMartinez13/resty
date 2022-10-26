// import './results.scss';
// import JSONPretty from 'react-json-pretty';

// const Results = (props) => {

//   return (
//     <section>
//       <JSONPretty
//         // theme={}
//         id='json-pretty'
//         data-testid="test-results"
//         data={JSON.stringify(props.data)}>
//       </JSONPretty>
//     </section>
//   );
// };

// export default Results;

import React from 'react';
// import JSONPretty from 'react-json-pretty';


import './results.scss';

const Results = (props) => {

  return (
    <section className="resultsSection">
      {/* <JSONPretty> */}
        <h3 className="h3Results">Results</h3>
        <pre className="results" data-testid="result-pre-test">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      {/* </JSONPretty> */}
    </section>
  );

};


export default Results;
