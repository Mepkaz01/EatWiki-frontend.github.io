import React, {Component} from "react"

const ProfileEdit = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:"center"}}>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Name: </label><input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="name" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Username: </label><input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="username" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Password: </label><input onChange={props.handleChange} type="text" name="password" value={props.user.password} placeholder="password" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <div style={{marginBottom:'2px'}}><label  class="labelst" for="id1">Email: </label><input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="email" style={{ padding: '10px 10px',borderTopRightRadius:'5px', borderEndEndRadius:'5px',border:'0.25px solid', borderLeft:'0'}}/></div>
                <input onChange={props.handleChange} type="submit" value="Edit User" style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}/>
            </form>
            <button onClick={props.handleDelete} style={{ padding: '10px 10px', border:'0.25px solid', borderRadius:'5px', marginTop:'10px'}}>Delete Access</button>
        </div>
    )
}

export default ProfileEdit