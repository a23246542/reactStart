import React,{useState} from 'react';

const UseStateObjCounter = () => {
  const [{count1,count2},setObj] = useState({
    count1:4,
    count2:6,
  })

  const addObjCount1 = () => {
    setObj((preState)=>({
      ...preState,
      count1:preState.count1 + 1
    }))
  }

  const addObjCount2 = () => {
    setObj((preState)=>({
      ...preState,
      count2:preState.count2 + 1
    }))
  }

  return (
    <div>
      <h2>setState要自己組</h2>
      <h3>count1:{count1}</h3>
      <h3>count2:{count2}</h3>
      <button onClick={addObjCount1}>addObjCount1</button>
      <button onClick={addObjCount2}>addObjCount2</button>
    </div>
  )
}

export default UseStateObjCounter;