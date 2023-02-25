import React from "react";
import { Component } from 'react';
import { CardChart } from "./cardChart";
import { CardData } from "./cardData";
import { CardLast } from "./cardLastReads";
import { StyleContent } from './style';
import { TableContent } from "./tableContent";
class Content extends Component {


  render() {
    return (
      <StyleContent>
        <div className="content">
          <h1>Dashboard</h1>
          <div className="row">
            <div className="card-last">
              <CardLast />

            </div>
            <div className="analytics">
              <h2>Analytics</h2>
              <CardChart />
            </div>
          </div>

          <div className="row">
            <div className="card-node">
              <CardData title="Number of Sensors" subtitle="All active nodes" number="50" />
            </div>

            <div className="card-networks">
              <CardData title="Number of Networks" subtitle="All active networks" number="5" color="#6BF98A" />
            </div>

            <div className="card-sensors">
              <CardData title="Number of Nodes" subtitle="All active nodes" number="40" color="#6BF98A" />
            </div>

          </div>

          <div className="row">
            <div className="table-contents">
            <TableContent />

            </div>
          </div>

        </div>

      </StyleContent>

    );
  }

}

export { Content }