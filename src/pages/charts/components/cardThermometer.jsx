import React, { Component } from "react";
import { StyleCardThermometer } from './style';
import {Temperature} from 'react-environment-chart';

class CardThermometer extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }

  render() {

    return (
		<StyleCardThermometer>
			<div className="cardData">
				<div className="container">
					<div className="title">
							<h3>Thermometer</h3>
					</div>
					<div className="temperature_chart">
            <Temperature 
              value={20}
              height={250}
            />
					</div>
				</div>
				
			</div>
		</StyleCardThermometer>

    );
  }

}

export { CardThermometer }