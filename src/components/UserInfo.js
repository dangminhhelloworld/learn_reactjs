import React from "react";
class UserInfo extends React.Component {
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

  handerOnMouseOver(event) {}
  haderOnchange = (event) => {
    event.preventDefault();

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
        <form onSubmit={(event) => this.handOnSubmit(event)}>
          <input type="text" onChange={(event) => this.haderOnchange(event)} />
        </form>
        <button>Click Me OK</button>
      </div>
    );
  }

}
export default UserInfo ;
