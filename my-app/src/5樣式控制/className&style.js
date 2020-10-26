import React from 'react';
import camp from '../img/camp.jpg';
import camp2 from '../img/camp2.jpg';
import camp3 from '../img/camp3.jpg';
import '../style.css';

class ImgToggle extends React.Component{
  state = {
    visible1: true,
    visible2: true,
    visible3: true,
  };

  toggleEl = () => {
    this.setState((prevState)=>({
      visible1:!prevState.visible1,
    }))
  };

  toggleStyle = () => {
    this.setState((prevState)=>({
      visible2:!prevState.visible2,
    }))
  };

  toggleClass = () => {
    this.setState((prevState)=>({
      visible3:!prevState.visible3
    }))
  };

  render() {
    const { visible1 ,visible2, visible3 } = this.state;

    return (
      <div>
        <button type="button" onClick = {this.toggleEl}>toggle元素</button>
        <button type="button" onClick = {this.toggleStyle}>toggleStyle</button>
        <button type="button" onClick = {this.toggleClass}>toggleClass</button>
        <br/>
        {/* <img src="{camp}" alt=""/> %%vue才用這樣html字串 */}
        { visible1 ? <img src={camp}/> : null }
        <img src={camp2} style={{display:visible2 ? 'block' : 'none'}} alt=""/>
        {/* 原本就是字串 */}
        {/* <img src={camp3} className="image" alt=""/> */}
        <img src={camp3} className={`image ${visible3 ? '' : 'hide' }`} alt=""/>
      </div>
    )
  }
}

export default ImgToggle;