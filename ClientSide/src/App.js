import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import './styles/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Marchent from './components/Marchent'
import User from './components/User'
import Footer from './components/Footer'
import MarchentAccount from './components/MarchentAccount'
import Help from './components/Help'
import SignUp from './components/SignUp'
import Chittagong from './components/Chittagong'
import About from './components/About'



const App = () => {
  return (
  <Router>
      <div className="App ">
      <Navbar/>

      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Marchent}/>
          <Route exact path="/login" component={User}/>
          <Route exact path="/marchentuser" component={SignUp}/>
          <Route exact path="/marchentaccount" component={MarchentAccount}/>
          <Route exact path="/help" component={Help}/>
          <Route exact path="/chittagong" component={Chittagong}/>
          <Route exact path="/about" component={About}/>
          
        </Switch>
        <div className="mt-4 footerSection">
        <Footer />
        </div>
      
    </div>
  </Router>
  )
}

export default App

