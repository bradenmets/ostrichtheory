import React, {Component} from 'react';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import {Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
// Import pages
import {Bio,Home,Join,Photos,Lyrics,Music} from './components/screens'



class NavBar extends Component{
  handleSelect = (eventKey) => {
    eventKey.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <Links />
      </Nav>
    );
  }
}

const Links = () =>(
  <nav>
    <NavLink replace to="/">Home</NavLink>
    <NavLink replace to="/music">Music</NavLink>
    <NavLink replace to="/photos">Photos</NavLink>
    <NavLink replace to="/lyrics">Lyrics</NavLink>
    <NavLink replace to="/bio">Bio</NavLink>
    <NavLink replace to="/join">Join!</NavLink>
  </nav>
  )
const App = () =>( 
  <Router>
    <div >
      <NavBar />
      <div className="main">
      <Route exact path="/"   component={Home}/>
      <Route path="/music"    component={Music}/>
      <Route path="/photos"   component={Photos}/>
      <Route path="/lyrics"   component={Lyrics}/>
      <Route path="/bio"      component={Bio}/>
      <Route path="/join"     component={Join}/>
      </div>
    </div>

  </Router>


  );

export default App
