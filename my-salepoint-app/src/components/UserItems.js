import axios from 'axios'
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import ItemAdd from './ItemAdd';


class UserItems extends React.Component {

    constructor (props) { 
        super(props)
        this.state = {
             items: [],
               
    }
}

    componentDidMount =()=>{
        axios.get("http://localhost:3001/items/all")
        .then(resp => {
            console.log(resp)
            this.setState ({
                items: resp.data
               
            })
        }
    )
}

    
    render = (props)=>{
            console.log(this.state.items)
            return(
                <div>
                    <h1>Your Listings</h1>
                    <ItemAdd userId={this.props.userId}/>
                                         
                    <Link to={'/itemadd'}><button  style={{margin:'20px'}}>Add Listing</button></Link>
                    
                    <div>
                        {this.state.items.map(item => {
                            return item.userId === this.props.userId ?
                            <div>
                                <img src={item.image} width="300" height="200"/> 
                                <h2>{item.itemName}</h2>
                                <h3>{item.category}</h3>
                                <h2>${item.price}</h2>
                                <h4>{item.status}</h4>
                                <h4>{item.description}</h4>
                                <br></br>
                                <Link to={`/itemdelete/${item.id}`}><button  style={{margin:'20px'}}>Remove Listing</button></Link>
                                <br></br>
                                <Link to={`/itemedit/${item.id}`}><button style={{margin:'20px'}}>Edit Listing</button></Link>
                            </div> 

                            : null
                        })}
                    </div>
                </div>
            ) 
        }           

    }

export default UserItems;