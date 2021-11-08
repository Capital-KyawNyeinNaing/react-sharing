import "./App.css";
import React, { useEffect, createRef, useState } from "react";
import styled from "styled-components";
import { FirstComponent } from "./components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import { commonAction } from "./store/actions/common.action";
import { HomeStyled } from "./components/styledComponent/HomeStyle";

const App = (props) => {
  const [user, setUser] = useState();
  const { openRedux_data } = useSelector((state) => state.common); // reducer
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(commonAction("OPEN", !openRedux_data)); // action
  };

  const add = (num, resolve, reject) => {
    if (Array.isArray(num)) {
      let result = num.reduce((a, b) => a + b);
      resolve(result);
    } else {
      reject();
    }
  };

  const addPromise = (num) => {
    return new Promise((resolve, reject) => {
      if (Array.isArray(num)) {
        let result = num.reduce((a, b) => a + b);
        resolve(result);
      } else {
        reject();
      }
    });
  };

  async function sum(num) {
    try {
      let result = await addPromise(num);
      console.log(`Result: ${result}`);
    } catch {
      console.log("Something wrong");
    }
  }

  sum(1);
  console.log("object");

  // addPromise([1, 2]).then(res => {
  //   console.log(`Result: ${res}`)
  // }).catch(() => {
  //   console.log('Something wrong')
  // })

  // addPromise(1)
  //   .then((a) => {
  //     return a + 1;
  //   })
  //   .then((b) => {
  //     return b + 1;
  //   })
  //   .then((res) => {
  //     console.log(`Result: ${res}`);
  //   })
  //   .catch(() => {
  //     console.log("Something wrong");
  //   });

  // add([1, 2], result => {
  //   console.log(`Result: ${result}`)
  // }, () => {
  //   console.log('Something wrong')
  // })

  console.log(openRedux_data);

  const nameRef = createRef();
  const priceRef = createRef();

  const handleClick = () => {
    props.add(
      props.items.length + 1,
      nameRef.current.value,
      priceRef.current.value
    );
  };

  const Home = ({ border }) => (
    <>
      <HomeStyled border={border}>
        <div>
          <span>width 100</span>
        </div>
      </HomeStyled>
      <HomeStyled border={border} width="200">
        <div className="width-200">width 200</div>
      </HomeStyled>
    </>
  );

  const About = () => <ThirdComponent />;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      });
  }, []);

  const styles = {
    marginBottom: 30,
  };

  return (
    <>
      <div style={styles}></div>

      {/* <FirstComponent
        data={{
          name: "Name 1",
          age: 14,
        }}
      /> */}

      {user?.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
      <button onClick={handleClickOpen}>Click</button>
      <div className="test">Test</div>
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
            <Home border />
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
