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
        <StyleCardData isActive={this.props.isActive}>
            <div className="container">
                <div className="title">
                    <h3>{this.props.title_data}</h3>
                    <div>
                        <p>{this.props.subtitle_data}</p>
                    </div>
                </div>
                <div className="number">
                    <div className="numberCircle">
                        {this.props.number_data}
                    </div>
                </div>
            </div>
        </StyleCardData>

    );
  }

}

export { CardData }