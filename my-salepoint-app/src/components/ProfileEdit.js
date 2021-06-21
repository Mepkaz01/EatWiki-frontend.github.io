import React, {Component} from "react"
import { Link } from "react-router-dom";

const ProfileEdit = (props) => {
    return (
        <div>
              <fieldset style={{width:'350px', border:' solid blue 1px' ,borderRadius:'5px',padding:'20px 10px'}}>   
        <legend>{props.user.username} Detail</legend>
            <form onSubmit={props.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Name: </label><input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="name" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Username: </label><input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="username" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Password: </label><input onChange={props.handleChange} type="password" name="password" value={props.user.password} placeholder="password" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Email: </label><input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="email" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                {/* <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">User ID: </label><input onChange={props.handleChange} type="text" name="id" value={props.user.id} placeholder="user ID" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div> */}
                <div>                  
                <input onChange={props.handleChange} type="submit" value="Edit User" style={{ padding: '10px 20px', border:'0.25px solid', borderRadius:'5px', margin:'5px 4px 1px 0'}}/>
                <button onClick={props.handleDelete} style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', margin:'5px 4px 1px 0'}}>Delete Access</button>
                <Link to="/"><button style={{ padding: '10px 20px', border:'0.25px solid', borderRadius:'5px', marginTop:'5px'}}>Log Out</button></Link>
            </div>
            </form>
            </fieldset>
            
          
        </div>
    )
}

export default ProfileEdit