import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    
    render() {
        console.log(this.state.data)
        const user = this.state.data
        return(
            <div>
                <h1>Welcome {user.name}!</h1>
                <div>
                                   
                </div>            
            </div>
        )
    }
}    

export default Profile