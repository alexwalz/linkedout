import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Input, Icon, Menu, Container} from 'semantic-ui-react';
import Logo from './Logo';


class Nav extends Component {
    state = { activeItem: 'home' }
      static propTypes = {
    color: PropTypes.string,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
     const { color } = this.props

    return (
      <Menu color={ color } inverted> 
            <Container style={{paddingLeft:30}}>
                <Logo/>
                <Menu.Item>
                <Input icon='search' placeholder='Search...' style={{width:300}}/>
                </Menu.Item>
            </Container>
        <Menu.Menu position='center' style={{marginLeft: 200}}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='network' active={activeItem === 'network'} onClick={this.handleItemClick}>
                <Icon name='users' />
                Network
            </Menu.Item>
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
                <Icon name='image' />
                Profile
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
 
export default Nav;


