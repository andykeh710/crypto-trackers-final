import React from "react";
import axios from "axios";

export const myContext = React.createContext({});

const Context = (props) => {
  const [userObject, setUserObject] = React.useState({});

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/getUser", { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
};

export default Context;
