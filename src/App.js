import React from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import Banner from './components/Banner';
import './App.css';



class MainShop extends React.Component {
  state= {
    products: [
      {
        id: 1,
        img: 'https://images.asos-media.com/products/topshop-editor-jeans-in-bleach/24153014-1-blue1?$n_320w$&wid=317&fit=constrain',
        price: 50.29,
      },
      {
        id: 2,
        img: 'https://images.asos-media.com/groups/crooked-tongues-oversized-tie-dye-with-logo-in-blue-co-ord/39003-group-1?$n_320w$&wid=317&fit=constrain',
        price: 32.41,
      },
      {
        id: 3,
        img: 'https://images.asos-media.com/products/topshop-animal-print-tie-dye-jumper-in-beige/23890807-1-nude?$n_320w$&wid=317&fit=constrain',
        price: 42.99,
      },
      {
        id: 4,
        img: 'https://images.asos-media.com/products/topshop-micro-quilted-nylon-crossbody-bag-in-peach/200220478-1-peach?$n_320w$&wid=317&fit=constrain',
        price: 20.99,
      },
      {
        id: 5,
        img: 'https://images.asos-media.com/products/topshop-boysie-t-shirt-in-green/200242404-1-green?$n_320w$&wid=317&fit=constrain',
        price: 11.99,
      },
      {
        id: 6,
        img: 'https://images.asos-media.com/products/topshop-oversized-mom-jeans-in-dragon-print/24471895-1-white?$n_320w$&wid=317&fit=constrain',
        price: 11.99,
      },
      {
        id: 7,
        img: 'https://images.asos-media.com/products/topshop-everyday-t-shirt-in-green/24393796-1-green?$n_320w$&wid=317&fit=constrain',
        price: 11.99,
      },
      {
        id: 8,
        img: 'https://images.asos-media.com/products/topshop-raindrop-diamante-denim-shorts-in-bleach/24469588-1-blue?$n_320w$&wid=317&fit=constrain',
        price: 11.99,
      },
      
    ],
    cart: [] 
  }

  productHandler = (product) => {
    const newState = this.state;
    const newCart = this.state.cart;
    newCart.push(product);
    newState.cart = newCart;
    this.setState(newState);
    const action = {
      type: 'CHECK_ADD',
      payload: newState.cart,
    }
    this.props.dispatch(action)
    console.log(newState.cart)
    console.log('in the product handler')
    
  }
  
    
    render() { 
      //console.log(this.props)
      console.log('hellooooooooooooooo')
        return ( 
          <>
          <Banner />
            <header className="Main-header">
              <h1 className="title2">TREAT YOURSELF.</h1>

              {this.state.products.map((product) => <Card key={product.id} product ={ product } productHandler={this.productHandler}/>)}

            </header>
          </>
            
         );
    }
}
 
export default connect()(MainShop);


