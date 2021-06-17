import axios from 'axios'
import React from 'react'

class Item extends React.Component {

    constructor(props){ 
    super(props)
    this.state={
        item:{}
    }
}
componentDidMount =()=>{
    axios.get(`http://localhost:3001/items/${this.props.match.params.indx}`).then(
        resp =>{
            console.log(resp)
            this.setState({
                item:resp.data
            })
        }
    )
}

render = ()=>{
    const item=this.state.item

    return(
        <div>
            
            <h1> Item Sale </h1>
            <div className="App1">
            <div >
                <img src={item.image} alt="Pic" width='400'/>
                <h3 key={item.id}>{item.itemName}</h3>
                <h4 key={item.id}>{item.category}{'  ( '}<span style={{color:'red'}}>{item.status}</span>{' )'}</h4>
                <h3>{'$ '}<span style={{color:'blue'}}>{item.price}</span></h3>
                <h5 key={item.id}>{item.description}</h5>
                </div>
            
            </div>
        </div>
    )
}
}
export default Item;