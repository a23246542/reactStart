import React from 'react';
import axios from 'axios';


export default function mock() {

  const instance = axios.create({
    baseURL: 'http://localhost:3002',
    credentials: 'include',
    headers: {"Content-Type": "application/json"},
  })

  const getApi = () => {
    instance.get("/api/test/profile?wuwueue=123&skskfkf=838348",)
      .then((response)=>{
        console.log(response);
        return response.json()
      }).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
    })
  }
  const getApiPost = () => {
    instance.post("/post", { ID: 1243 })
      .then((response)=>{
        console.log(response);
        // return response.json()
      }).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div>
      <button onClick={getApi}>获取mockGet</button>
      <button onClick={getApiPost}>获取mockPost</button>
    </div>
  )
}


