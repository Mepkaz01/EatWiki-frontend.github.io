import React, {Component} from "react"
import axios from "axios"

class ItemEdit extends Component {
    constructor() {
        super()
        this.state= {
            data: {

                itemName:"",
                category:"",
                price: "",
                status: "",
                description:"",
                image: "",
                userId:""
               
                
            }
        }
    }

componentDidMount = () => {
        axios.get(`http://localhost:3001/items/${this.props.match.params.indx}`)
        .then(resp => {
            this.setState({
                data: resp.data
                
            })   
            console.log(resp) 
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
        axios.put(`http://localhost:3001/items/${this.props.match.params.indx}`, this.state.data)
        .then(resp => {
            console.log("item Edit")
            console.log(resp)
            this.props.history.push(`/profile/${this.state.data.userId}`)
            // this.props.history.push(`/items/${resp.data.user.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        console.log(this.state.data)
        const item=this.state.data
        return (
            <div>
                <h2>Edit Item</h2>
               
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Item Name :</label><input onChange={this.handleChange} type="text" name="itemName" value={item.itemName}placeholder=" itemName" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Category :</label><input onChange={this.handleChange} type="text" name="category" value={ item.category} placeholder="category" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Item Price :</label><input onChange={this.handleChange} type="text" name="price" value={item.price} placeholder="price" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}} /></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Status :</label><input onChange={this.handleChange} type="text" name="status" value={item.status} placeholder="status"style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}} /> </div>                
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Description :</label><input onChange={this.handleChange} type="text" name="description" value={item.description}  placeholder="description" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>  </div>               
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> image :</label><input onChange={this.handleChange} type="text" name="image" value={item.image} placeholder="Image" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>   </div>              
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> User ID :</label><input onChange={this.handleChange} type="text" name="userId" value={item.userId} placeholder="UserID" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>   </div>              

                <input type="submit" value="Confirm Edit Listing" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>           
                </form>
            </div>
        )
    }
}    

export default ItemEdit