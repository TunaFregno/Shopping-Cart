import React from 'react';
import './style.css'
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import Login from '../Login';
import { Link } from 'react-router-dom';



class Checkout extends React.Component {

    

    render() {
        
        return (
            <div className="checkoutBox">

                <div className="checkoutBanner">
                    <Link to='/' className='homeLink'>HOME</Link>
                    <h1>CHECKOUT</h1>
                </div>

                <div className="displayCart">
                {this.props.cart.map((product) => {
                   return <div className="checkbox" key={product.id}> <img src={product.img} alt='shirt'/> CHF{product.price}</div>
                })}
    
                </div>
                <div className="totalBox">Total: {this.props.cart.map((p) => {
                    let total =  0;
                    total += p.price;
                    return total;
                })}
            
                </div>
                
                
                <Popup className='popup-content'  trigger={ <button className="checkoutButton">Pay</button>} modal >
                <Login/>
                </Popup>
            </div>
            
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
};
  
export default connect(mapStateToProps)(Checkout);
