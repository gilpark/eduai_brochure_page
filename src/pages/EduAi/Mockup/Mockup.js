import React, { Component } from 'react'
import {connect} from 'react-redux'

import './Mockup.css'

class Mockup extends Component {
  render(){
    return(
      <div className={'Mockup_content'}>
        <h2> Mockup section</h2>
      </div>
    )
  }
}
export default connect()(Mockup)
