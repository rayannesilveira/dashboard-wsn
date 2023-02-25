import React, { Component } from "react";
import GaugeChart from 'react-gauge-chart'
import { StyleCardDataWeekly } from './style';

class CardNetwork extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }

  render() {

    return (
		<StyleCardDataWeekly>
			<div className="cardData">
				<div className="container">
					<div className="title">
							<h3>Collected data</h3>
							<p>Since 10/07/2022</p>
					</div>
					<div>
						<GaugeChart id="gauge-chart" 
							nrOfLevels={10} 
							percent={0.86} 
							textColor="#393939"
							colors={["#007ABF", "#7AADCA"]} 
						/>
					</div>
					<div className="footer">
						<p>86% reach</p>
					</div>
				</div>

				
			</div>
		</StyleCardDataWeekly>

    );
  }

}

export { CardNetwork }