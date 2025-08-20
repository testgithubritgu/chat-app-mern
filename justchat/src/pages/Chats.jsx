import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chats = () => {
  const [chats,setchats] = useState([])
  const fetchChats = async()=>{
    const {data} = await axios.get("http://localhost:5001/api/chats")
    setchats(data);
  }
  useEffect(()=>{
    fetchChats()
  },[])
  return (
    <>
      <div>
        {chats.map((el,idx)=>(
          <h1 key={idx}>{el.chatName}</h1>
        ))}
      </div>
    </>
  )
}

export default Chats
