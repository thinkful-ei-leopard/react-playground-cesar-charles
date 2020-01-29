import React from 'react';

class Bomb extends React.Component{
  state={
    count: 0,
   
  }
  handleButtonClick = () => {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
}
    comonentUnmount() {
      clearInterval(this.interval)
    }
    renderDisplay() {
    
      if (this.state.count >= 8 ) {
        clearInterval(this.interval)
        return 'Boom!!!'
      } else if (this.state.count % 2===0){
        return 'tick'
      } else{
        return'tock'
      }
    }
  
  render(){
    return(
        <div>
       <p>{this.state.count}</p>
          {this.renderDisplay()}
  <button onClick={() => this.handleButtonClick()}> Start Timer</button>
        </div>

    )
    
  }
}

export default
Bomb;