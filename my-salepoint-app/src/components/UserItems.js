import axios from 'axios'
import React, {Component} from 'react'


class UserItems extends React.Component {

    constructor(props){ 
    super(props)
    this.state={
                
    }
}
    
    render = (props)=>{
            console.log(this.state.items)
            return(
                <div>
                    <h1>Your Listings</h1>
                    <div>
                        {props.items.userId(item => 
                            <h1>{item.itemName}</h1>
                        )}
                    </div>
                </div>
            ) 
        }           

    }

export default UserItems;