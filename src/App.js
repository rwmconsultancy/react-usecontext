import "./App.css";
import React, { useState, createContext } from "react";
import Component2 from "./components/Component2";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("you");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user} from app.js`}</h1>
      Let's re-set the name:{" "}
      <input type="text" name="name" onChange={handleChange} />
      <Component2 />
    </UserContext.Provider>
  );
}

export default App;
