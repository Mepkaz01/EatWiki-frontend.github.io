import axios from 'axios'
import React from 'react'
import { Link } from "react-router-dom";


class Items extends React.Component {

    constructor(props){ 
    super(props)
    this.state={
        items:[],
             
        
    };
}

componentDidMount =()=>{
    axios.get("http://localhost:3001/items/all").then(
        resp =>{
            console.log(resp)
            this.setState({
                items: resp.data
                
                
            })
        }
    )
}



render = ()=>{

    return(
        <div>
            <h1>Sneak Peek at All of Our Users Listings</h1>
            <h2>For more information <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h2>
            <br></br>
            <Link to="/">Back to Home Page</Link>
            <br></br>
            <div className="App1">
            {this.state.items.map(item =>
                <div>
                    
                    <img src={item.image} alt="Pic" width='400'/>
                    <h3 key={item.id}>{item.itemName}</h3>
                    <h4 key={item.id}>{item.category}{'  ( '}<span style={{color:'red'}}>{item.status}</span>{' )'}</h4>
                    <h3>{'$ '}<span style={{color:'blue'}}>{item.price}</span></h3>
                    
                </div>
            )}
            </div>
        </div>    
            
     
    )
}
}
export default Items;