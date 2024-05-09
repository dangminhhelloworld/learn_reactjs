import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponents from "./components/MyComponents";
import React from "react";
class App extends React.Component {
  state = {
    name: "minh",
    address: "hoa binh",
    age: 18,
  };
  handerClick = (event) => {
    console.log(" My name is  ", this.state.name);
    this.setState({
      name: "thanh",
    });
  };

  handerOnMouseOver(event) {
  
  }
  haderOnchange = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      name: event.target.value,
    });
  };

  handOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} And I'm from {this.state.address}
        <form onSubmit={(event)=>this.handOnSubmit}>
          <input type="text" onChange={(event) => this.haderOnchange(event)} />
        </form>
        <button>Click Me OK</button>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Dang Minh Hello World
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }
export default App;
