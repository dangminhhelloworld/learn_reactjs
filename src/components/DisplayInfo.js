import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props; //? = const
    console.log(this.props);
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div> My name {user.name}</div>
              <div> My age{user.age} </div>
            </div>
          );
        })}
        {/* <div> My name {name}</div>
        <div> My age {age}</div>
        <br />
        <div> My name {name}</div>
        <div> My age {age}</div>
        <br /> <div> My name {name}</div>
        <div> My age {age}</div> */}
        <br />
      </div>
    );
  }
}

export default DisplayInfo;
