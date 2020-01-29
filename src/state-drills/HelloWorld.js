import React from 'react';

// class HelloWorld extends React.Componnent{
// render (){
//   return(
//         <div>
//           <p>Hello, world.</p>
//           <button>World</button>
//           <button>Friend</button>
//           <button>React</button>
//         </div>
//  )
//   }
//    }

   class HelloWorld extends React.Component{
     state ={
       display:'Hello, World!',
       world:'World!',
       friend:'Friend!',
       react:'React!'
      
     };
     handleWorldClick = () => {
      const newDisplay ='Hello, ' + this.state.world 
      this.setState({
        display: newDisplay
      })
     }
     handleFriendClick = () => {
      const newDisplay ='Hello, ' + this.state.friend  
      this.setState({
        display: newDisplay
      })    
    }
    handleReactClick = () => {
      const newDisplay = 'Hello, ' + this.state.react      
      this.setState({
        display: newDisplay
      })
    }
     render(){
       return(
         <div>
     <p>{this.state.display} </p>
     <button onClick={() => this.handleWorldClick()}>World</button>
     <button onClick={() => this.handleFriendClick()}>Friend</button>
     <button onClick={() => this.handleReactClick()}>React</button>

         </div>
       )
     }
   }
  



export default 
HelloWorld;