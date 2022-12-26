import React from 'react';
import Timer from './Component/Timer';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      fullname:'AYACHI MOUNIR',
      Bio:'I am a Full Stack JS Student',
      imgsrc:'https://pngimg.com/uploads/pokemon/pokemon_PNG129.png',
      profession:'STUDENT IN GOMYCODE',
      Show:'false',
    }
  }
  ToggleShow =()=>{
    this.setState({Show: !this.state.Show})
  }
  render(){
    return(
    <div className="App">
     {this.state.Show && <>
      <h1>My name is {this.state.fullname}</h1>
      <h2>Bio:{this.state.Bio}</h2>
      <img style={{width:'200px'}} src={this.state.imgsrc} alt='abcd'/>
      <h1 style={{color:'red'}}>بيكاتشو</h1>
      <h2>Profession: {this.state.profession}</h2>
      <hr/>
      <h3>Compteur</h3>
      <Timer/>
     </> }
     
      <button onClick={this.ToggleShow}>Show Frofile </button>
    </div>
    )
  }
}

export default App;
