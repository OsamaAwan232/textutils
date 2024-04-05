import React from 'react'

const Alert = (props) => {
    const capitlize = (word) =>{
        const lower = word.toLowerCase();
       return  lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{height: '50px'}}>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {capitlize(props.alert.type)}:{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
