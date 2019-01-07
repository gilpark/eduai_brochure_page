import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Attraction.css'
import xs from 'xstream'

import bg_0 from '../../../assets/attraction_bg/1.jpg'
import bg_1 from '../../../assets/attraction_bg/3.jpg'
import bg_2 from '../../../assets/attraction_bg/5.jpg'
import bg_3 from '../../../assets/attraction_bg/6.jpg'

class Attraction extends Component {
  constructor(props){
    super(props)
      this.state = {
        bg_src : bg_0
      }
      let interval = 4000
      let len = 4
      let imageArray = [bg_0,bg_1,bg_2,bg_3]
      this.bg$ = xs.periodic(interval).map(x => imageArray[x%len])
  }
  componentDidMount() {
    this.bg$
        .subscribe({next : x => {
           this.setState({bg_src : x})
            }
        })
  }

    render(){
    return(
      <div className={'Attraction_content'}
           style={ { backgroundImage: `url(${this.state.bg_src})` } }
      >
        {/*<h2> Attraction section</h2>*/}
        <div className={'text_box'}>
            <div className={'title'}>
                {'EduAi'}
            </div>
          <div className={'text'}>
              {'We are a non-profit organization committed to ensuring that all students have access to innovative and effective Artificial Intelligence.'}
          </div>
        </div>
      </div>
    )
  }
}
export default connect()(Attraction)
