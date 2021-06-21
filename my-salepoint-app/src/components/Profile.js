import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";
import UserItems from "./UserItems";
import AllUserItems from "./AllUserItems";
import ItemAdd from './ItemAdd';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                username: "",
                password: "",
                email: "",
                id:0
            },
            top:false,
            userItemTag:false
            
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

  
    toggle1= () =>{
        
        this.setState({top:!this.state.top})
    }
    userItemToggle= () =>{
        
        this.setState({userItemTag:!this.state.userItemTag})
    }
    
    render() {
      
        const user = this.state.data
       

        return(
            <div>
                 <nav style={{backgroundColor:'#03cffc',display:'flex', padding:'10px 30px',borderBottom:"3px solid", borderTop:'1px solid'}}>
            <Link to="/" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}}>Log Out</Link>
            <Link to="/cart" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}} >🛒Cart</Link>
            <Link to="" style={{padding:'4px 10px', textDecoration:'none', fontWeight:'bolder'}} >About</Link>
            </nav>
            <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1>Welcome  <span style={{color:'blue'}}>{user.name}!</span></h1>
                <div >
                    <div style={{display:'flex',flexDirection:'column',alignItems:"center", justifyContent:'center', marginBottom:'7px'}}>
                  <ProfileEdit 
                    user={user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDelete={this.handleDelete}
                  />
                  </div>

<button onClick={this.toggle1} style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', margin:'5px 4px 1px 0'}}> Add Listing</button>
<button onClick={this.userItemToggle} style={{ padding: '10px 14px', border:'0.25px solid', borderRadius:'5px', margin:'5px 4px 1px 0'}}>My Listing</button>
<Link to="/allitems"><button style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', margin:'5px 4px 1px 0'}}>View All Listings</button></Link>

{this.state.top ? <ItemAdd user={this.state.data}  userItemToggle={this.userItemToggle} /> : null}
                 
                  
                  {this.state.userItemTag ? 
                  <UserItems 
                    user={user} userItemToggle={this.userItemToggle}
                  />
                  :
                  null
                  }

                </div>            
            </div>
            </div>
        )
    }
}    

export default Profile