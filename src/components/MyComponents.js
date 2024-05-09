
import React from "react";

class MyComponents extends React.Component{
    //? JSX

    render() {
        /*   
        * chỉ lưu 1 thẻ div
        * viết js trong dâu //! {} ;
        
        
        */
        return (
            <div> my fisrt Component
                {Math.random()}
            </div>
        );
    }

}

export default MyComponents;