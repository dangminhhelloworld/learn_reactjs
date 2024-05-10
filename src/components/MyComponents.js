
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponents extends React.Component{
    //? JSX

    render() {  
        /*   
        * chỉ lưu 1 thẻ div
        * viết js trong dâu //! {} ;
        
        
        */
        return (
          <div>
                <UserInfo/>
                <DisplayInfo name ="Dang minh2" age ="18"/>
            </div>
            
        );
    }

}

export default MyComponents;