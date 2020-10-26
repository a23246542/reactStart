import React,{useState} from 'react';


// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   addCount = () => {
//     this.setState(()=>({
//       count:this.state.count + 1,
//     }))
//   };
//   render() {
//     const {count} = this.state;
//     return (
//       <div>
//         <h3>class component</h3>
//         <h3>{count}</h3>
//         <button type="button" onClick={this.addCount}>Add</button>
//       </div>
//     )
//   }
// }
// ============================================================
const App = () =>{
  const [count,setCount] = useState(0)
  const addCount = () => {
    // setCount(()=>{count+1}) %%要傳入!!跟回傳!!
    // setCount(count => count+1);
    setCount(c => c+1);//因為其實是參數可以隨便取
  }
  return (
    <div>
      <h3>function component</h3>
      <h3>{count}</h3>
      {/* <button type="button" onClick={setCount(count+1)} >Add</button>//@@%%變成重複執行了Error: Too many re-renders. */}
      <button type="button" onClick={addCount} >Add</button>
    </div>
  )
}

export default App;