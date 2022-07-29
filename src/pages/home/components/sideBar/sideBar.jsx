import React from "react";
import { Component } from 'react';
import img from "./assets/LAPS.png"
import { StyleSideBar } from './style';
import {MenuItem} from "./menuItem";

class SideBar extends Component {


  render() {
    return (
      <StyleSideBar>
        <div className="sideBar">
          <img src={img} alt="Logo LAPS" />
          <MenuItem name="Dashboard" icon="VscDashboard" color="#007ABF" isActive="isActive"/>
          <MenuItem name="Networks" icon="BiNetworkChart" color="#999999" />
          <MenuItem name="Charts" icon="IoIosStats" color="#999999" />
          <MenuItem name="Downloads" icon="FaFileDownload" color="#999999"/>
        </div>

      </StyleSideBar>

    );
  }

}

export { SideBar }