import React, { Component } from "react";
import { StyleCardData } from './style';


class CardData extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }


  async componentDidMount() {

  }


  render() {

    return (
      <StyleCardData>
        <div className="cardData">
          <div className="container">
            <div className="title">
              <h1>{this.props.title}</h1>
              <div className="container-p">
                <p>{this.props.subtitle}</p>
              </div>
            </div>
            <div className="number">
              <div className="numberCircle">
                {this.props.number}
              </div>
            </div>
          </div>

        </div>

      </StyleCardData>

    );
  }

}

export { CardData }