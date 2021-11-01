import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const FirstComponent = (props) => {
  const { openRedux } = useSelector((state) => state.common);

  const { name, age } = props.data;
  const [open, setOpen] = useState(false);

  const [nameState, setNameState] = useState("Kyaw Kyaw");

  const [item, setItem] = useState(["Apple"]);
  const [add, setAdd] = useState([{ name: "Apple" }]);

  const handleClick = () => {
    setOpen(true);
    setNameState("Aye");
    setItem([...item, "Orange"]);
    setAdd([...add, { age: 10 }]);
  };

  const handleClickBack = () => {
    setOpen(false);
  };

  console.log('first', openRedux);

  return (
    <div>
      {/* {open && <div>{name}</div>} */}
      {open ? nameState : <div>{name}</div>}
      <div>{age}</div>
      {add.map((x, y) => (
        <div key={y}>
          <div>{x.name}</div>
          <div>{x.age}</div>
        </div>
      ))}
      <button onClick={() => handleClick()}>Click</button>
      <button onClick={() => handleClickBack()}>Click 1</button>
    </div>
  );
};

export default FirstComponent;
