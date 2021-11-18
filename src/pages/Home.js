import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptas
      fugit in repellat iusto excepturi dolorum reprehenderit? In, repellendus
      assumenda. Harum quod architecto eveniet asperiores qui est eligendi
      consequatur quo.
      </div>
  );
};

export default Home;
