import axios from 'axios'
import React from 'react'
import { Link } from "react-router-dom";
import UserItems from "./UserItems";

class Items extends React.Component {

    constructor(props){ 
    super(props)
    this.state={
        items:[]
    }
}
componentDidMount =()=>{
    axios.get("http://localhost:3001/items/all").then(
        resp =>{
            console.log(resp)
            this.setState({
                items:resp.data
            })
        }
    )
}


handleDelete = (event) => {
    event.preventDefault()

    axios.delete(`http://localhost:3001/items/${4}`)
    .then(resp => {
        console.log("Item Deleted");
        console.log(resp)
        // this.props.history.push('/')
        this.props.history.push('/items')
    })       
    
}


render = ()=>{

    return(
        <div>
            <h1> Items Sale </h1>
            <div className="App1">
            {this.state.items.map(item =><div >
                <div><button onClick={ this.handleDelete} style={{margin:'20px'}}>Delete Item</button> 
                    <Link to={`/itemedit/${item.id}`} ><button style={{margin:'20px'}}>Edit Item</button> </Link></div>
                <img src={item.image} alt="Pic" width='400'/>
                <h3 key={item.id}>{item.itemName}</h3>
                <h4 key={item.id}>{item.category}{'  ( '}<span style={{color:'red'}}>{item.status}</span>{' )'}</h4>
                <h3>{'$ '}<span style={{color:'blue'}}>{item.price}</span></h3>
                <h5 key={item.id}>{item.description}</h5>
            
                </div>
            )}
            </div>
            
        </div>
    )
}
}
export default Items;