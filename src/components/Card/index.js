import React from 'react';

class Card extends React.Component {

    handleEvent = (event) => {
        console.log('in the add card');
        event.preventDefault();
        this.props.productHandler(this.props.product);
        
    }
    
    
    render() { 
        return ( 
            <div className="addBox">
                
                <img src={this.props.product.img} className="imgBox" alt="imgBox"/>
                <p className="price">From CHF{this.props.product.price}</p>
                <button className='buttonAdd' onClick={this.handleEvent}>Add</button>
            </div>
        );
    }
}
 
export default Card;