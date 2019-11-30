import React from 'react'
import "./UserOutputStyle.css"


const UserOutput = (props) => {
    const style = {
        border: "2px solid red",
        margin: "15px auto",
        width:"200px",
        padding:"10px"
    }

    return (
        <div style={style}>
            <p className="p-1">Hi {props.username}. This is paragraph One</p>
            <p className="p-2">This is Paragraph Two!</p>
        </div>
    );
}

export default UserOutput;