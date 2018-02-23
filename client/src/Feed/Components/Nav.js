import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Input, Icon, Menu, Segment, Dropdown} from 'semantic-ui-react';
import Logo from './Logo';
import {Link} from "react-router-dom";
import background from '../../img/midnight.jpg'
import axios from 'axios'




class Nav extends Component {
    state = { activeItem: '', loggedInUser: "", loggedIn: false }
      static propTypes = {
    color: PropTypes.string,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 logout = () =>{
   return(
  axios({
    method: 'delete',
    url: '/api/users/login',
    data: null,
    headers: {'Content-Type': 'application/json'}
    })
  )
 }

 getUser = () => {
  axios.get('/api/users/login')
  .then(response => {
    this.setState({loggedInUser: response.data.userId, Loggedin: response.data.loggedIn})
  })
  .catch(error => {
      console.log('Error fetching and parsing data', error);
  });
 }
  

 componentDidMount(){
   this.getUser()
 }

  render() {
    const { activeItem } = this.state
     const { color } = this.props

    return (
      <Segment color={ color } inverted  style={{   
        paddingBottom: 0.5,
        position: "fixed",
        zIndex: 20,
        left: 0,
        right: 0,
        backgroundImage: `url(${background})`,
      }}>
      <Menu inverted pointing secondary style={{ border:'none'}}> 
        <Menu.Menu position='left' style={{marginLeft: 30}}>
                <Logo/>
                <Menu.Item>
                <Input icon='search' placeholder='Search...' style={{width:300}}/>
                </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='left'>
           
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
               <Link to="/home/feed">
                <Icon name='home' />
                Home
              </Link>
              </Menu.Item>
            

            <Menu.Item name='network' active={activeItem === 'network'} onClick={this.handleItemClick}>
                <Icon name='users' />
                Network
            </Menu.Item>
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
              <Link to={`/home/profile/${this.state.loggedInUser}`}>
                <Icon name='image' />
                Profile
              </Link>
              </Menu.Item>

              

              
              <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}> <Link to="" onClick={this.logout}> <Icon name='lock' /> Logout </Link> </Menu.Item>
              



            
        </Menu.Menu>
      </Menu>
    </Segment>

    )
  }
}
 
export default Nav;


