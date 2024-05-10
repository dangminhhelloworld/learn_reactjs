
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponents extends React.Component{
    //? JSX
    state = {
            listUsers:[
                {id:1 ,name : "Dang minh2" ,age :"16"},
                {id:2 ,name : "Dang minh3" ,age :"20"},
                {id:3 ,name : "Dang minh3" ,age :"39"},
            ]
    }
    render() {  
        /*   
        * chỉ lưu 1 thẻ div
        * viết js trong dâu //! {} ;
        
        
        */
       //!DRY: don't repeat yourseft
        return (
          <div>
                <UserInfo/>
                <br/>
                <DisplayInfo listUsers ={
                    this.state.listUsers
                }/>
            </div>
            
        );
    }

}

export default MyComponents;