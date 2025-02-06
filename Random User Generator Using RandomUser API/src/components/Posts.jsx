import React from "react"
import getPosts from './posts'
import { useState } from "react"
import { useEffect } from "react"
import Card from './Card'

function Posts() {
   const [data,setData] =useState(null)
   useEffect( () => {
      getPosts().then((posts) => setData(posts))
   }, [])

  return (
    <div className="main-div">
    { data ? data.map((e) =><><Card  body ={e.body} title={e.title}/></>) : <h2>No Data</h2>}
    </div>
  )
}

export default Posts

