import React, {Component} from 'react';
import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import {Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
const Home = () => <h1>Home</h1>
class NavDropdownExample extends Component{
  handleSelect = (eventKey) => {
    eventKey.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey="1" href="/home">Home</NavItem>
        <NavItem eventKey="2" title="Item">Music</NavItem>
        <NavItem eventKey="3" disabled>Lyrics</NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

const Links = () =>(
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to={{pathname:'/about'}}>Music</NavLink>
    <NavLink replace to="/contact">Photos</NavLink>
    <NavLink replace to="/lyrics">Lyrics</NavLink>
    <NavLink replace to="/bio">Bio</NavLink>
    <NavLink replace to="/join">Join!</NavLink>
  </nav>
  )
const App = () =>( 
  <Router>
    <div>
      <NavDropdownExample />
    </div>

  </Router>


  );

export default App
