import React from "react";
import { Component } from 'react';
import { CardNetwork } from './cardNetwork';
import { StyleContent } from './style';
import { CardThermometer } from './cardThermometer';

class Content extends Component {
  render() {
    return (
      <StyleContent>
        <div className="content">
          <h1>Charts</h1>
          <div className="row">
            <div className="card-gauge">
              <CardNetwork />
            </div>
            <div className="card-temperature-1">
              <CardThermometer />
            </div>
            <div className="card-temperature-2">
              <CardThermometer />
            </div>
          </div>
            
        </div>
      </StyleContent>

    );
  }

}

export { Content }