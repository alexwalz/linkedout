import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Logo from './Components/Logo'
import LoginForm from './Components/LoginForm'




class LoginPage extends Component {


  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  render() {
    const styles = {
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }



    return (
      <Parallax ref='parallax' pages={2}>

         
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
            onClick={() => this.refs.parallax.scrollTo(1)}>
          </Parallax.Layer>

          <Parallax.Layer
            offset={0.0}
            speed={0.7}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            onClick={() => this.refs.parallax.scrollTo(1)}>
            <Logo/>
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
          offset={1.07}
          speed={2.9}
          >
          <LoginForm/>
        </Parallax.Layer>

      </Parallax>
    );
  }
}

export default LoginPage;