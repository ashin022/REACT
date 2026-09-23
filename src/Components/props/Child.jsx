import React from "react"

const Child = (props) => {
    return (
        <div>
        Name is: {props.student.name}<br/>
        age is: {props.student.age}<br/>
        email is:{props.student.email}
        </div>
    )

}

export default Child