import React from "react";

const Card = (props) => {
  return (
    <div className="main-div">
       <div className="card">
        <h1 className="heading">{props.title}</h1>
        <p className="para">{props.body}</p>
      </div>
    
    </div>
  )
}

export default Card 