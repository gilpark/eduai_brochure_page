import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Introduction.css'

class Introduction extends Component {
  render(){
    return(
      <div className={'Introduction_content'}>
        <h2> Introduction section</h2>
      </div>
    )
  }
}
export default connect()(Introduction)
