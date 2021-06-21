import React from 'react'
import { Link, Route } from "react-router-dom";
import axios from 'axios'


class Home extends React.Component{
    constructor()
    {
        super()
        this.state={
            items: []
                        
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




    render= () =>{
    return (
        <div className='profileImag' style={{height:'100%', width:'100%'}} >
            <nav style={{backgroundColor:'#03cffc',display:'flex', padding:'10px 30px',borderBottom:"3px solid", borderTop:'1px solid'}}>
            <Link to="/login" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Log In</Link>
            <Link to="/signup" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Sign Up</Link>
            <Link to="" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}} >About</Link>
            
            </nav>
            <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color:'white'}}>Welcome to Sale Point</h1>
            <h2 style={{color:'orange'}}>Buy Smart and Sell with Confidence</h2>
            <div>
            <Link to="/items" style={{textDecoration:'none', fontSize:'150%', color:'yellow'}}>Peek All Listings</Link>
            </div>
            <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center', width:'500px', marginTop:'20px'}}>
            {this.state.items.map(item =>
                <div>
                    
                    <img src={item.image} alt="Pic" width='100' height='75'/>
                   
                    
                </div>)}
                </div>
                </div>
        </div>
    )
}}

export default Home;

