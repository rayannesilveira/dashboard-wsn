import React from "react";
import { Component } from 'react';
import { SideBar } from "./components/sideBar/sideBar";
import { Content } from "./components/content/content"
import './style.css';

class Network extends Component {
     state = {
          products: [],
          searchValue: ''
     };

     render() {

          return (
               <section className="container">
                    <div className="row">
                         <div className="sideBar">
                              <SideBar />
                         </div>


                         <Content />

                    </div>



               </section>
          );
     }

}

export { Network };
