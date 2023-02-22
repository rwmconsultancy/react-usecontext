import React, { useContext } from "react";

import { UserContext } from "../App";

const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Hello from component5</h1>
      This is the user from the app.js - top down props drill with useContext hook, now living in component5.js:
      <br />
      <b>{user}</b>
    </>
  );
};

export default Component5;
