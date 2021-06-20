import React, {Component} from "react"
import axios from "axios"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                username: "",
                password: ""
                
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
        axios.post("http://localhost:3001/auth/login", this.state.data)
        .then(resp => {
            console.log("User Logged In")
            console.log(resp)
            this.props.history.push(`/profile/${resp.data.id}`)  
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        console.log(this.props)
        return (
            
            <div>
                <h2 style={{fontsize:"bolder"}}>LOG IN</h2>
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" style={{padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" style={{padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                    <br></br>                    
                    <input type="submit" value="Login" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>
                </form>
            </div>
        )
    }
}    


export default Login