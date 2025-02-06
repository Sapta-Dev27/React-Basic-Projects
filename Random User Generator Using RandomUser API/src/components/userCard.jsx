import React from "react";

const Users= (props) => {
  console.log(props.title)
  return (
    <div className="main-div">
       <div className="card">
        <img src={props.title.picture.medium} alt="Not Found"></img>
       <h1 className="heading">{props.title.name.title} {props.title.name.first} {props.title.name.last}</h1>
        <h1 className="heading">{props.title.dob.age}</h1>
        <p className="para">{props.title.dob.date}</p>
        <p className="para">{props.title.email}</p>
        <p className="para">{props.title.gender}</p>
        <p className="para">{props.title.location.city}</p>
      </div>
    
    </div>
  )
}

export default Users