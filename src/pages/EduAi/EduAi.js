import React, { Component } from 'react'
import {connect} from 'react-redux'
import './EduAi.css'
import Attraction from "./Attraction/Attraction";
import Introduction from "./Introduction/Introduction";
import Mockup from "./Mockup/Mockup";
import WorldMap from "./WorldMap/WorldMap";

class EduAi extends Component {
  render(){
    return(
      <div>
        <Attraction/>
        <Introduction/>
        <Mockup/>
        <WorldMap/>
      </div>
    )
  }
}
export default connect()(EduAi)
