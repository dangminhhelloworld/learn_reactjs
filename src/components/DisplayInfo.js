import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {
    state = {
        isShow : true 
    }
  handlShowHide = () => {
    this.setState({
        isShow : !this.state.isShow
    })
  };

  render() {
    const { listUsers } = this.props;
    console.log(this.props);
    return (
      <div className="dissplay-info-container">
        <img src={logo}/>
        <div >
          <div>
            <span onClick={this.handlShowHide}>
              {this.state.isShow === true? "Hide list user" :"Show user"}
            </span>
          </div>
  
          {this.state.isShow  && 
          <div>
            {listUsers.map((user) => (
              <div key={user.id} className={user.age > 18 ? "red" : "aqua"}>
                <div >My name: {user.name}</div>
                <div>My age: {user.age}</div>
              </div>
            ))}
          </div>
          }
        </div>
      </div>
    );
  }
}

export default DisplayInfo;