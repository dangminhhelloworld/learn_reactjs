import React from "react";

class DisplayInfo extends React.Component{
    render(){
        const {age , name} = this.props ;
        console.log(this.props);
        return( <div>
            <div> My name {this.props.name}</div>
           <div> My age {this.props.age}</div>
        </div>);
    }
}

export default DisplayInfo ;