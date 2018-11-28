import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import EduAi from "./pages/EduAi/EduAi";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li><a href={'/'}>EduAi</a></li>
              <li><a href={'/app'}>AppAi</a></li>
            </ul>
          </header>
          <div className={'content'}>
            <Route path={'/'} exact={true} component={EduAi}/>
            <Route path={'/app'} exact={true} render={()=><div><h1>AppAi</h1></div>}/>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
