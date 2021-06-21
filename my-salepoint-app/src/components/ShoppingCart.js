import React, { Component } from 'react';
import axios from 'axios'

class ShoppingCart extends Component {

    constructor(props){
        super(props)
        this.state={
            items: [],
            cart: []
                       
        };

    }

    componentDidMount =()=>{
        axios.get("http://localhost:3001/items/all")
        .then(resp =>{
            this.setState({
                items: resp.data
                })
            }
        )
    }
    

  addItemToCart=(e) =>{
    const item = e.target.value;
    console.log(item);
    this.setState(state =>{
        const cart=[...state.cart, state.item]
        return{ cart,
        item}
    
    });
  }

  render= (props) =>{

  return (
    <div style={{display:'flex', }}>
      <div  >
      {this.state.items.map(item =>
         <div style={{display:'flex', flexDirection:'column', margin:'10px' ,alignItems:'center'}}>
        <img src={item.image} width="300" height="200"/>
        <button value={item.itemName} onClick={this.addItemToCart} style={{margin:'20px'}}>  Add to Cart</button>
        
         </div>)}
      </div>
      <div style={{margin:'300px 0 10px 150px'}}>
          <div className='App2'>
        🛒 Cart 
       
          {this.state.cart.map(item => <h4 key={item}>{item}</h4>)}

          </div>
        
      </div>
    </div>
  );
}}

export default ShoppingCart;