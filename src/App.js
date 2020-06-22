import React, { useEffect, useState } from "react";
import "../src/style/site.css";
import Form from "./components/Form";
import CardList from "./components/CardList";

const App = (props) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    addNewProfile();
  }, []);
  const addNewProfile = (newProfileData) => {
    setProfiles((profiles) => [...profiles, newProfileData]);
  };

  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

export default App;
