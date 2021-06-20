import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";
import UserItems from "./UserItems";
import AllUserItems from "./AllUserItems";
import ItemAdd from './ItemAdd';



class Refresh extends Component {
    constructor(props) {
        super(props);
        
            
            
            
        }
    

    

    
   
    
    render() {
        

        return(
            <div>
                <button onClick={this.props.toggle}>Close</button>
                     
            </div>
        )
    }
}

export default Refresh