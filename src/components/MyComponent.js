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
  handleAddNewUser = (userObject) =>{
  
    
    this.setState({
      listUsers:[userObject,...this.state.listUsers]
    })
  }
   //? JSX
  render() {
    /*   
        * chỉ lưu 1 thẻ div
        * viết js trong dâu //! {} ;
        
        
        */
    //!DRY: don't repeat yourseft
    return (
      <div>
       <AddUserInfo handleAddNewUser={this.handleAddNewUser}
        
       />
        <br />
        <DisplayInfo listUsers={this.state.listUsers}
       
         />
      </div>
    );
  }
}

export default MyComponent;
