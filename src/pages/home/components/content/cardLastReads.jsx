import React, { Component } from "react";
import { StyleCardLast } from './style';
import img from "./assets/circle.png";


class CardLast extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }


  async componentDidMount() {

  }


  render() {

    return (
      <StyleCardLast>
        <div className="cardLast">
          <h1>Last 30 Days Collected Data</h1>

          <div className="circle">
            <img src={img} alt="Circulo" />
            <h2>40k</h2>
            <p>Samples</p>
          </div>
          <div className="circle-content">
            <h3>Events DISTRIBUTION </h3>
            <p> 30 </p>
            <h3>Nodes</h3>
            <p> 3 </p>
            <h3>Networks</h3>

          </div>


        </div>

      </StyleCardLast>

    );
  }

}

export { CardLast }