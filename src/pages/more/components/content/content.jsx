import React from "react";
import { Component } from 'react';
import { CardNetwork } from "./cardNetwork";
import { StyleContent } from './style';
import { CardNumber } from './cardNumber';
import { CardLast } from './cardLastReads';
import {TableContent} from "./tableContent";
class Content extends Component {


  render() {
    return (
      <StyleContent>
        <div className="content">
          <h1>Rede Uema</h1>

          <div className="row">
            <div className="card-node">
              <CardNetwork rede_title="Rede UEMA" isActive="Active"/>
            </div>
            <div className="card-number">
              <CardNumber number_title="Number of Sensors" number_subtitle="by node" number_data="6" list_button="List of Sensors"></CardNumber>
              <CardNumber number_title="Number of Nodes" number_subtitle="All active nodes" number_data="9" list_button="List of Nodes"></CardNumber>
            </div>
            <div className="card-last">
              <CardLast />
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