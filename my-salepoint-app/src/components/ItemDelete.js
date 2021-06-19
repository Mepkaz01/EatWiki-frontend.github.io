import axios from 'axios'
import React from 'react'
import { Link } from "react-router-dom";

class ItemDelete extends React.Component {

    constructor(props){ 
    super(props)
    this.state={
        item:{
            userId: ""
        }
    }
}
componentDidMount =()=>{
    axios.get(`http://localhost:3001/items/${this.props.match.params.indx}`)
    .then(resp =>{
        console.log(resp)
        this.setState({
                item: resp.data
            })
        }
    )
}

handleDelete = (event) => {
    event.preventDefault()

    axios.delete(`http://localhost:3001/items/${this.props.match.params.indx}`)
    .then(resp => {
        console.log("Item Deleted");
        console.log(resp)
        // this.props.history.push('/')
        this.props.history.push(`/profile/${this.state.item.userId}`)
    })       
    
}
render = (props)=>{
    const item=this.state.item

    return(
        <div>
            
            <h1> Item Sale </h1>
            <div className="App1">
            <div >
                <img src={item.image} alt="Pic" width='400'/>
                <h3 key={item.id}>{item.itemName}</h3>
                <h4 key={item.id}>{item.category}{'  ( '}<span style={{color:'red'}}>{item.status}</span>{' )'}</h4>
                <h3>{'$ '}<span style={{color:'blue'}}>{item.price}</span></h3>
                <h5 key={item.id}>{item.description}</h5>
                </div>
            <button onClick={this.handleDelete}>Confirm Listing Removal</button> <Link to={`/profile/${item.userId}`}><button>Cancel</button></Link>
            </div>
        </div>
    )
}
}
export default ItemDelete;