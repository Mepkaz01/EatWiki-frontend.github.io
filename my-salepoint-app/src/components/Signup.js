import React, {Component} from "react"
import axios from "axios"
import { Link, Route } from "react-router-dom";

class Signup extends Component {
    constructor() {
        super()
        this.state= {
            data: {
                name: "",
                username: "",
                password: "",
                email: ""
                
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/auth/signup", this.state.data)
        .then(resp => {
            console.log("User Created")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.data)
        return (<div>
            <nav style={{backgroundColor:'#03cffc',display:'flex', padding:'10px 30px',borderBottom:"3px solid", borderTop:'1px solid'}}>
            <Link to="/login" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Log In</Link>
            {/* <Link to="/signup" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Sign Up</Link> */}
            <Link to="" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}} >About</Link>
            
            </nav>
            <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
               
                <h2 style={{fontsize:"bolder"}}>SIGN UP</h2>
                <fieldset style={{width:'350px', border:' solid blue 1px' ,borderRadius:'5px',padding:'20px 10px'}}>   
        <legend>👤</legend>
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Name: </label><input onChange={this.handleChange} type="text" name="name" placeholder="name" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Email: </label><input onChange={this.handleChange} type="text" name="email" placeholder="email" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>                 
                  
                    <input type="submit" value="Sign Up" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>           
                </form>
                </fieldset>
            </div>
         </div> )
    }
}    

export default Signup