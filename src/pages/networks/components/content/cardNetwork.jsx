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
		<StyleCardDataWeekly isActive={this.props.isActive}>
			<div className="cardData">
				<div>
					<h1>{this.props.rede_title}</h1>
				</div>

				<CardData isActive={this.props.isActive} title_data="Collected Data" subtitle_data="Since 10/07/2022" number_data="1k" ></CardData>
				<CardData isActive={this.props.isActive} title_data="Number of Nodes" subtitle_data="All active nodes" number_data="49"></CardData>

				<div className="buttons">
					<div className={this.props.isActive ? 'isActive' : 'isDisabled'}>
						<div className="circle"></div>
						<p>{this.props.isActive ? 'Active' : 'Disabled'}</p>
					</div>
					<div>
						<a className="button" href="/rede_uema" hidden={!this.props.isActive} >See more </a>
					</div>
				</div>
			</div>
		</StyleCardDataWeekly>

    );
  }

}

export { CardNetwork }