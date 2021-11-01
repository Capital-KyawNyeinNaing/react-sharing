import React from "react";

const SecondComponent = (props) => {
  console.log("second >>", props);

  return (
    <div>
      <hr />
      {props.data.map((value) => (
        <div key={value.id}>
          <div>{value.name}</div>
          <div>{value.price}</div>
        </div>
      ))}
    </div>
  );
};

export default SecondComponent;
