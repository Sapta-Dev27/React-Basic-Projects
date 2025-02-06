import React from "react";
import getUser from "./user";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from './userCard'

const RandomUser =() => {
   const [user , setUser] = useState(null) ;
   useEffect( () => {
    getUser().then((users) => {
      setUser(users.results[0])
    })
   } , [])
   return (
      <>
       {user &&  <UserCard title={user}/>  }
      </>
   )
}

export default RandomUser