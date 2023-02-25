import React, { Component } from "react";
import { StyleCardDataWeekly } from './style';
import { CardData } from './cardData';

class CardNetwork extends Component {
  state = {
    number: '',
    nodes: '',
    networks: ''
  }


  async componentDidMount() {

  }


  render() {

    return (
		<StyleCardDataWeekly>
			<div className="cardData">
				<div>
					<h1>{this.props.rede_title}</h1>
				</div>

				<CardData title_data="Collected Data" subtitle_data="Since 10/07/2022" number_data="1k" ></CardData>
				<CardData title_data="Number of Nodes" subtitle_data="All active nodes" number_data="49"></CardData>

				<div className="buttons">
					<div className="isActive">
						<p>{this.props.isActive}</p>
					</div>
					<div>
						<a href="/rede_uema/charts">See more</a>
					</div>
				</div>
			</div>
		</StyleCardDataWeekly>

    );
  }

}

export { CardNetwork }