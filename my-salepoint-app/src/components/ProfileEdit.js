import React, {Component} from "react"

const ProfileEdit = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                name: <input onChange={props.handleChange} type="text" name="name" value={props.user.name} placeholder="name"/>
                username: <input onChange={props.handleChange} type="text" name="username" value={props.user.username} placeholder="username"/>
                password: <input onChange={props.handleChange} type="text" name="password" value={props.user.password} placeholder="password"/>
                email: <input onChange={props.handleChange} type="text" name="email" value={props.user.email} placeholder="email"/>
                <input onChange={props.handleChange} type="submit" value="Edit User"/>
            </form>
            <button onClick={props.handleDelete}>Delete Access</button>
        </div>
    )
}

export default ProfileEdit