import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hel")
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current =>({count: current.count + 1}))
  };
  minus = () =>{
    this.setState(current =>({count:current.count - 1}))
  };
  // mount
  componentDidMount(){
    console.log("component render")
  }
  //update
  componentDidUpdate(){
    console.log("I just updated")
  }
  // Unmount //component가 떠날때 호출 (ex}다른페이지이동시)
  componentWillUnmount(){
    console.log("Good Bye, cruel World")
  }
  render(){
    console.log("bye");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
