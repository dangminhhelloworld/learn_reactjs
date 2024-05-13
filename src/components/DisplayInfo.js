import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

//state liss and stateful
// class DisplayInfo extends React.Component {
//   render() {
//     console.log("call me render");
//     const { listUsers } = this.props;
//     console.log(this.props);
//     return (
//       <div className="dissplay-info-container">
//         {true && (
//           <div>
//             {listUsers.map((user) => (
//               <div key={user.id} className={user.age > 18 ? "red" : "aqua"}>
//                 <div>My name: {user.name}</div>
//                 <div>My age: {user.age}</div>
//                 <div>
//                   <button
//                     onClick={() => this.props.handleDeleteNewUser(user.id)}
//                   >
//                     {" "}
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <div className="dissplay-info-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser ? "Hide list user" : "Show list user"}
        </span>
      </div>

      {isShowHideListUser && (
        <div>
          {listUsers.map((user) => (
            <div key={user.id} className={user.age > 18 ? "red" : "aqua"}>
              <div>My name: {user.name}</div>
              <div>My age: {user.age}</div>
              <div>
                <button onClick={() => props.handleDeleteNewUser(user.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayInfo;
