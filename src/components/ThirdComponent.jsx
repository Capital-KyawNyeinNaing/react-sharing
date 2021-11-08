import React, { useState, useContext } from "react";

const MyContext = React.createContext("Hello React");

const Title = (props) => {
  const name = useContext(MyContext);
  return <h1>{name}</h1>;
};

const Header = (props) => {
  return <Title />;
};

const ThirdComponent = () => {
  return <Header />;
};

export default ThirdComponent;
