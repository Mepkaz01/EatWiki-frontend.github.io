import React, {Component} from "react"
import axios from "axios"


class ItemAdd extends Component {
    constructor(props) {
        super(props)
              
              this.state= {
            data: {

                itemName:"",
                category:"",
                price: "",
                status: "",
                description:"",
                image: "",
                userId: this.props.user.id,
                userEmail: this.props.user.email          
               
            },
            tog:true
        }
    }
    
    
    toggleSubmit= () =>{
       
    this.setState({tog:!this.state.tog})
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
        axios.post("http://localhost:3001/items/newitem", this.state.data)
        .then(resp => {
            this.toggleSubmit()
            this.props.userItemToggle()
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(props) {
               return (
            <div>
                 { this.state.tog ? <div>
                <h2>Add Item</h2>
                <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>

                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Item Name: </label><input onChange={this.handleChange} type="text" name="itemName" placeholder=" itemName" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Category: </label><input onChange={this.handleChange} type="text" name="category" placeholder="category" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Price: </label><input onChange={this.handleChange} type="text" name="price" placeholder="price" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}} /></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Status: </label><input onChange={this.handleChange} type="text" name="status" placeholder="status"style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}} /> </div>                
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Description: </label><input onChange={this.handleChange} type="text" name="description" placeholder="description" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>  </div>               
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Image: </label><input onChange={this.handleChange} type="text" name="image" placeholder="image" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>   </div>    
                {/* <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> User ID: </label> */}
                <input onChange={this.handleChange} type='hidden' name="userId" value={this.props.user.id} placeholder={this.props.user.id} style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>
                {/* </div>   */}
                {/* <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1"> Email: </label> */}
                <input onChange={this.handleChange} type="hidden" name="userEmail" value={this.props.user.email} placeholder={this.props.user.email} style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/>
                {/* </div>   */}
                {/* { this.state.tog ?  */}
                <input type="submit" value="Confirm Add Listing" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>           
                {/* :null
            } */}
                </form>
                </div>
                    :null
                }
            </div>
        )
    }
}    

export default ItemAdd;