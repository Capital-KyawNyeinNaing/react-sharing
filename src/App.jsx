import "./App.css";
import React, { useEffect, createRef } from "react";
import { FirstComponent } from "./components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import { common } from "./store/actions/common.action";

const App = (props) => {
  const { openRedux } = useSelector((state) => state.common); // reducer
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(common("OPEN", !openRedux));
  };

  // useEffect(() => {

  // }, [])

  console.log(openRedux);

  const nameRef = createRef();
  const priceRef = createRef();

  const handleClick = () => {
    props.add(
      props.items.length + 1,
      nameRef.current.value,
      priceRef.current.value
    );
  };

  const Home = () => (
    <>
      Home
    </>
  );

  const About = () => <div>About</div>;

  return (
    <>
      {/* <FirstComponent
        data={{
          name: "Name 1",
          age: 14,
        }}
      /> */}
      <button onClick={handleClickOpen}>Click</button>

      <div>
        <label>Name</label>
        <br />
        <input type="text" ref={nameRef} />
        <br />
        <br />
        <label>Price</label>
        <br />
        <input type="text" ref={priceRef} />
        <br />
        <br />
        <button onClick={() => handleClick()}>Click</button>
      </div>

      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
