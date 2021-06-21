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
        this.props.history.push(`/profile/${this.state.item.userId}`)
    })       
    
}

render = (props)=>{
    const item=this.state.item

    return(
        <div>
            
            <h1> Listing Detail </h1>
            <div className="App1">
            <div style={{marginTop:'30px'}} >
                <img src={item.image} alt="Pic" width='400' height="300"/>
                <fieldset style={{width:'400px', border:' solid blue 1px' ,borderRadius:'5px',padding:'20px 10px',marginBottom:'15px'}}>   
        <legend> Detail</legend>
                <h3 key={item.id}>{item.itemName}</h3>
                <h4 key={item.id}>{item.category}{'  ( '}<span style={{color:'red'}}>{item.status}</span>{' )'}</h4>
                <h3>{'$ '}<span style={{color:'blue'}}>{item.price}</span></h3>
                <h5 key={item.id}>{item.description}</h5>
                </fieldset>
                </div>
                <div style={{marginBottom:'20px'}}>
            <button onClick={this.handleDelete} style={{color:'red', fontWeight:'bold',padding: '10px 10px', border:'0.25px solid', borderRadius:'5px'}}>Confirm Listing Removal</button> 
            <Link to={`/profile/${item.userId}`}><button style={{ color:'blue',marginLeft:'7px',fontWeight:'bold',padding: '10px 10px', border:'0.25px solid', borderRadius:'5px'}}>Cancel</button></Link>
            </div>
            </div>
        </div>
    )
}
}
export default ItemDelete;