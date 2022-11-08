import React from "react";
import { Component } from 'react';
import { CardNetwork } from "./cardNetwork";
import { StyleContent } from './style';
class Content extends Component {


  render() {
    return (
      <StyleContent>
        <div className="content">
          <h1>Network</h1>

          <div className="row">
            <div className="card-node">
              <CardNetwork rede_title="Rede UEMA" isActive={true}/>
            </div>

            <div className="card-networks">
              <CardNetwork rede_title="Rede UFMA" isActive={false}/>
            </div>

          </div>
            

        </div>

      </StyleContent>

    );
  }

}

export { Content }