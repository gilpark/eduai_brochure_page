import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Attraction.css'

class Attraction extends Component {
  render(){
    return(
      <div className={'Attraction_content'}>
        <h2> Attraction section</h2>
      </div>
    )
  }
}
export default connect()(Attraction)
