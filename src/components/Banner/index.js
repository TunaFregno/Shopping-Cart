import React from 'react';
import './style.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import Login from '../Login';


class Banner extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div className="bannerBox">
              <img src="https://www.shareicon.net/data/512x512/2015/09/19/643263_video_512x512.png" alt='logo' className="logo"/>
              <h1 className="title1">TRENDING BRANDS</h1>
              <Link to='/checkout' className='checkoutLink'>
                  Checkout
              </Link>
              <Popup className='popup-content'  trigger={ <button className="loginLink">Login</button>} modal >
                <Login/>
            </Popup>
            </div>
            
        );
    }
}

export default connect()(Banner);