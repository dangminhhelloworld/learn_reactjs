import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Dang minh2", age: "16" },
      { id: 2, name: "Dang minh3", age: "20" },
      { id: 3, name: "Dang minh3", age: "39" },
    ],
  };
  handleAddNewUser = (userObject) => {
    this.setState({

      listUsers: [userObject, ...this.state.listUsers],
    });
  };
  handleDeleteNewUser = (userId) =>{
    let listUsersClone =[...this.state.listUsers]
  }
  //? JSX
  render() {
    /*   
        * chỉ lưu 1 thẻ div
        * viết js trong dâu //! {} ;
        
        
        */
    //!DRY: don't repeat yourseft
    return (
     <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <DisplayInfo listUsers={this.state.listUsers}
          handleDeleteNewUser={this.handleDeleteNewUser} />
        </div>
        <div className="b"></div>
     </>
    );
  }
}

export default MyComponent;
