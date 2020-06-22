import React, { useState } from "react";
import axios from "axios";
import "../style/site.css";

const Form = (props) => {
  const [userName, setUserName] = useState("");

  function reset() {
    return setUserName("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    ); //api call using axios library
    props.onSubmit(response.data); //this holds a function reference and it alias(another name) to addNewProfileData function in APP
    reset();
  };

  const handleOnChange = (event) => {
    setUserName(event.target.value); //using this grab the value from dom
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={handleOnChange}
        placeholder="GitHub Username"
        required
      />
      <button>Add card</button>
    </form>
  );
};

export default Form;
