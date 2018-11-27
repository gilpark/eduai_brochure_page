import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <a href={'/'}>EduAi</a>
              </li>
              <li>
                <a href={'/app'}>AppAi</a>
              </li>
            </ul>
          </header>
          <div className={'content'}>
            <Route path={'/'} exact={true} render={()=><div><h1>EduAi</h1></div>}/>
            <Route path={'/app'} exact={true} render={()=><div><h1>AppAi</h1></div>}/>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
