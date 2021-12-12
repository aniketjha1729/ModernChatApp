import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state);

  return <div style={{ marginTop: "100px" }}>{user.user?.name}</div>;
};

export default Home;
