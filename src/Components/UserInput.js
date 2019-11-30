import React from 'react'

const UserInput = (props) => {

    const style = {
        borderRadius :"10px",
        padding: "20px" 
    }
    return (
        <div>
            <input style={style} onChange={props.nameChanged} value={props.username} />
        </div>
    );

}

export default UserInput;