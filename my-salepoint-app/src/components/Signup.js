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
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    name: <input onChange={this.handleChange} type="text" name="name" placeholder="name" />
                    username: <input onChange={this.handleChange} type="text" name="username" placeholder="username" />
                    password: <input onChange={this.handleChange} type="password" name="password" placeholder="password" />
                    email: <input onChange={this.handleChange} type="text" name="email" placeholder="email" />                 
                    <input type="submit" value="Sign Up" />           
                </form>
            </div>
        )
    }
}    

export default Signup