import React from 'react';
import './history.scss';

function History(props) {
  return (

    <section className="historySection">

      <h3 className="h3-history">History</h3>

      <div className="historyResults">{(props.history.map((reqHistory, index) =>
        <div key={index}>
          <span>{reqHistory.method}</span>
          <p>{reqHistory.url}</p>
        </div>
      ))}
      </div>

    </section>

  );

}

export default History;