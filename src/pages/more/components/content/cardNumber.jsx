import React, { Component } from "react";
import { StyleCardNumber } from './style';


class CardNumber extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }


  async componentDidMount() {

  }


  render() {

    return (
        <StyleCardNumber>
            <div className="container">
                <div className="div">
                    <div className="title">
                        <h3>{this.props.number_title}</h3>
                        <p>{this.props.number_subtitle}</p>
                    </div>
                    <div className="number">
                        <div className="numberCircle">
                            {this.props.number_data}
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button> {this.props.list_button} </button>
                    <button> View Charts </button>
                </div>
            </div>
        </StyleCardNumber>

    );
  }

}

export { CardNumber }