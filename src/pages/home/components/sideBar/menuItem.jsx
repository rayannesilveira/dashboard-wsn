import React, { Component} from "react";
import { Row} from 'react-bootstrap';
import { StyleMenuItem } from './style';
import { VscDashboard } from "react-icons/vsc";
import { BiNetworkChart } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";

class MenuItem extends Component {
  state = {
    name: '',
    icon: '',
    color: ''
  }

  getIconFromName = (icon) => {
    if (icon === "VscDashboard") {
      return <VscDashboard size={32}/>
    }

    if (icon === "BiNetworkChart") {
      return <BiNetworkChart size={32}/>
    }

    if (icon === "IoIosStats") {
      return <IoIosStats size={32}/>
    }

    if (icon === "FaFileDownload") {
      return <FaFileDownload size={32}/>
    }
  }

  async componentDidMount() {
    console.log(this.props.name);
  }


  render() {

    return (
      <StyleMenuItem>
        <div className={`menuItem ${this.props.isActive}`}>
          <Row>
            {this.getIconFromName(this.props.icon)}
            <span>
              {this.props.name}
            </span>
          </Row>
        </div>

      </StyleMenuItem>

    );
  }

}

export { MenuItem }