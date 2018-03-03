import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Logo from './Components/Logo'
import LoginForm from './Components/LoginForm'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import LoginModal from './Components/LoginModal'
import NewAccountModal from './Components/NewAccountModal'




class LoginPage extends Component {

  state={
    redirect: false,

  }

  componentDidMount(){
    this.getUser()
  }


  getUser = () => {
    axios.get('/api/users/login')
    .then(response => {
      this.setState(response.data)
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  redirect(){
    const { from } = this.props.location.state || { from: { pathname: "/home/feed" } };
    <Redirect to={from}/>
  }





  render() {
    const styles = {
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }

    return ( 

        <Parallax ref='parallax' pages={2}>

        {this.getUser}
        {(this.state.loggedIn) ? <Redirect to="/home/feed"/> : null}
  
           
          {/* Mobile  */}
          <Parallax.Layer offset={0} speed={0} factor={4.1} style={{ backgroundImage: `url('http://brtweed.co.uk/dist/images/bt3.jpg')`, backgroundSize: 'cover', backgroundPositionX: 'center' }} />
          <Parallax.Layer offset={1} speed={0} className='hide-on-med-and-up' onClick={() => this.refs.parallax.scrollTo(0)} />
  
          <Parallax.Layer offset={0} speed={0} style={{ backgroundImage: `url(${'http://brtweed.co.uk/dist/images/bt3.jpg'})`, backgroundSize: 'cover' }} />
          <Parallax.Layer offset={1} speed={0} style={{ backgroundImage: `url(${'http://getwallpapers.com/wallpaper/full/2/b/b/488958.jpg'})`, backgroundSize: 'cover' }} />
  
  
          <Parallax.Layer
            offset={0}
            speed={0}
          >
            {/* stuff for First page */}
            <Parallax.Layer
              offset={0}
              speed={0.5}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
              >
            </Parallax.Layer>
  
            <Parallax.Layer
              offset={0.0}
              speed={0.7}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
              >
        
                <Logo/>
                        
            </Parallax.Layer>
  
          </Parallax.Layer>

                    <Parallax.Layer
            offset={0}
            speed={0}
          >
            {/* stuff for First page */}
            <Parallax.Layer
              offset={0}
              speed={0.5}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
              >
            </Parallax.Layer>
  
            <Parallax.Layer
              offset={0.2}
              speed={1}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
              >
              <div  style={{marginLeft: "11.5%"}}>
                 <LoginModal/>
                 <NewAccountModal/>
              </div>
                        
            </Parallax.Layer>
  
          </Parallax.Layer>


  
  
  
  
          {/* stuff for Second page */}
          <Parallax.Layer
            offset={1}
            speed={-0.1}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}>
          </Parallax.Layer>
  
          <Parallax.Layer
            offset={1.03}
            speed={2.9}
            >

            {/* <LoginForm/> */}
            {/* Maybe we should add a contact form here? */}
            
          </Parallax.Layer>
  
        </Parallax>
      );
  
  }
}

export default LoginPage;