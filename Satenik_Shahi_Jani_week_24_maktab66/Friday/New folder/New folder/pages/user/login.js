import React, { useState } from "react";

const login = () => {
  const [user, setUser] = useState({});
  // const storedUser = useSelector(state => state.user.value)

  const inputChangeHandler = (e) => {
    const _user = { ...user, [e.target.name]: e.target.value };
    setUser(_user);
  };

  // useEffect(() => {
  //     console.log(storedUser)
  // }, [user])

  const submitAction = () => {
    localStorage.setItem("user", user);
    console.log("hi");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={inputChangeHandler}
        name="username"
        type="text"
        placeholder="username"
      />
      <br />
      <input
        onChange={inputChangeHandler}
        name="password"
        type="password"
        placeholder="password"
      />
      <br />
      <button onClick={submitAction}>submit</button>
    </div>
  );
};

export default login;
