import React from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {
  constructor(props){
    console.log(">> call constuctor: 1");
    super(props);
  }

    state = {
        isShow : true 
    }

    componentDidMount(){
      console.log('call me componet') ;
      setTimeout(()=>{document.title = 'minh zzz'},3000)
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      console.log('>>call ne component did  update' ,this.props,prevProps);
      if(this.props.listUsers !== prevProps.listUsers){
        if(this.props.listUsers.length === 5){
          alert('You got 5 ussers');
        }
      }

    }
  handlShowHide = () => {
    this.setState({
        isShow : !this.state.isShow
    })
  };

  render() {
    console.log('call me render');
    const { listUsers } = this.props;
    console.log(this.props);
    return (
      <div className="dissplay-info-container">
        {/* <img src={logo}/> */}
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
                <div>
                  <button onClick={() =>this.props.handleDeleteNewUser(user.id)}> Delete</button>
                </div>
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