import React, { useEffect, useState } from "react";

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "ramdom",
      name: name,
      age: age,
    });
  };
  useEffect(()=>{
    setTimeout(() =>{
      document.title = "Edit by Minh"
    },3000)
    console.log("call me ok");
  },[]);
  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={handleOnSubmit}>
        <label>Your name</label>
        <input
          value={name}
          type="text"
          onChange={handleOnChangeInput}
        />
        <label>Your age</label>
        <input
          value={age}
          type="text"
          onChange={handleOnChangeAge}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
