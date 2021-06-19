import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";
import UserItems from "./UserItems";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                username: "",
                password: "",
                email: ""
            }
        }
    }

    componentDidMount = () => {
        axios.get(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
            this.setState({
                data: resp.data
            })    
        })
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
        axios.put(`http://localhost:3001/user/profile/${this.props.match.params.id}`, this.state.data)
        .then(resp => {
            console.log("User Updated")
            console.log(resp)
        })
    }

    handleDelete = (event) => {
        event.preventDefault()

        axios.delete(`http://localhost:3001/user/profile/${this.props.match.params.id}`)
        .then(resp => {
            console.log("User Deleted");
            console.log(resp)
            this.props.history.push('/')
        })       
        
    }
    
    render() {
        console.log(this.state.data)
        const user = this.state.data
        return(
            <div>
                <h1>Welcome {user.name}!</h1>
                <div>
                  <ProfileEdit 
                    user={user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                  />
                  {/* Items by userid */}
                  {/* <Link to="/items/:userid">View Your Listings</Link>  */}
                  {/* Messages to userid */}
                  <Link to="/posts/:userid">Your Inbox</Link>
                  {/* Messages from userid */}
                  <Link to="/posts/:userid">Your Outbox</Link>
                  <UserItems 
                    userId={user.id}
                  /> 
                </div>            
            </div>
        )
    }
}    

export default Profile