import React, {Component} from "react"
import axios from "axios"

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
        return (
            <div>
                <h2 style={{fontsize:"bolder"}}>SIGN UP</h2>
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Name: </label> <input onChange={this.handleChange} type="text" name="name" placeholder="name" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Email: </label><input onChange={this.handleChange} type="text" name="email" placeholder="email" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>                 
                    <br></br> 
                    <input type="submit" value="Sign Up" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>           
                </form>
            </div>
        )
    }
}    

export default Signup