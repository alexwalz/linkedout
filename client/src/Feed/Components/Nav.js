import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Input, Icon, Menu, Segment, Dropdown} from 'semantic-ui-react';
import Logo from './Logo';
import {Link} from "react-router-dom";




class Nav extends Component {
    state = { activeItem: '' }
      static propTypes = {
    color: PropTypes.string,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
     const { color } = this.props

    return (
      <Segment color={ color } inverted  style={{   
        paddingBottom: 0.5,
        position: "fixed",
        zIndex: 20,
        left: 0,
        right: 0
      }}>
      <Menu inverted pointing secondary> 
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
              <Link to="/home/profile/id">
                <Icon name='image' />
                Profile
              </Link>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>

    )
  }
}
 
export default Nav;

