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
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    username: <input onChange={this.handleChange} type="text" name="username" placeholder="username" />
                    password: <input onChange={this.handleChange} type="password" name="password" placeholder="password" />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}    


export default Login