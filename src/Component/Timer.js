import React from 'react'
class Timer extends React.Component{
   constructor(){
    super()
    this.state={
        timer:0,
        intervall : null
    }
   }

   componentDidMount(){
    this.setState({intervall : setInterval(()=>this.setState({timer : this.state.timer + 1}),1000)})
   }
   render(){
    return (
        <div>
            <h3>{this.state.timer}</h3>
        </div>
    )
   }
}

export default Timer;