import axios from 'axios'
import React, {Component} from 'react'
import { Link } from "react-router-dom";



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



    thousands_separators = (num) => 
        {
            let num_parts = num.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return num_parts.join(".");
        }

    
    render = (props)=>{
            console.log(this.props.user.id)
            
            return(
                <div>
                    <h1>Your Listings</h1>

                                      
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                   

                        {this.state.items.map(item => {
                            return item.userId === this.props.user.id ?
                            <fieldset style={{width:'500px', border:' solid blue 1px' ,
                             borderRadius:'5px',padding:'30px  20px', marginRight:'10px',
                             display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>   
                            <legend>{this.props.user.username} Listing</legend>
                                <img src={item.image} width="300" height="200"/> 
                                <fieldset style={{width:'400px', border:' solid blue 1px' ,borderRadius:'5px',padding:'20px 10px',marginBottom:'15px'}}>   
        <legend> Detail</legend>
                                <h2>{item.itemName}</h2>
                                <h3>{item.category}</h3>
                                <h2>${this.thousands_separators(item.price)}</h2>
                                <h4>{item.status}</h4>
                                <h4>{item.description}</h4>
                                </fieldset>
                                <div>
                                <Link to={`/itemdelete/${item.id}`}><button  style={{marginRight:'7px',padding: '10px 10px', border:'0.25px solid black', borderRadius:'5px', marginTop:'1px',color:'red'}}>Remove Listing</button></Link>
                               
                                <Link to={`/itemedit/${item.id}`}><button style={{padding: '10px 10px', border:'0.25px solid black', borderRadius:'5px', marginTop:'1px'}}>Edit Listing</button></Link>
                                </div>
                                </fieldset>

                            : null
                        })}
                       
                    </div>
                </div>
            ) 
        }           

    }

export default UserItems;