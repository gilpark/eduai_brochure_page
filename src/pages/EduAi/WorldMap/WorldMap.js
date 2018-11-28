import React, { Component } from 'react'
import {connect} from 'react-redux'

import './WorldMap.css'

class WorldMap extends Component {
  render(){
    return(
      <div className={'WorldMap_content'}>
        <h2> WorldMap section</h2>
      </div>
    )
  }
}
export default connect()(WorldMap)


