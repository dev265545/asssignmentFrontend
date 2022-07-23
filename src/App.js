import { useGetAllPostByPageQuery, useGetAllPostQuery } from "./service/users";
import "../src/App.css";
import Card from "./components/Card";

import { useState } from "react";

export default function App() {
  // const [x, setX] = useState("");
  const [userID, setID] = useState("0");
  const [show, setShow] = useState(false);
  //const [inputvalue, setInputValue] = useState("x");
  //const [page, setpage] = useState("1");
  const responseInfo = useGetAllPostQuery();
  const pageresponseinfo = useGetAllPostByPageQuery(2);
  const fetch = responseInfo.data;
  const fetch2 = pageresponseinfo.data;

  // const handleOnchange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = () => {
  //   if (inputvalue > 2 || inputvalue < 1) {
  //     return <div></div>;
  //   } else {
  //     setpage(inputvalue);
  //     setX(pageresponseinfo.data);
  //   }
  // };
  const pagesubmit = () => {
    setShow(!show);
  };
  if (responseInfo.isLoading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  }
  if (responseInfo.isError) {
    return (
      <div>
        {" "}
        <h1>Error Occured</h1> <h2>{responseInfo.error.error}</h2>{" "}
      </div>
    );
  }

  // if (x === "") {
  //   setX(fetch);
  //   console.log(x);
  // }
  return (
    <div className="App">
      <Card id={userID} />
      <div className="maindiv">
        {fetch.data.map((user) => {
          return (
            <div key={user.id}>
              {" "}
              <button
                onClick={() => {
                  setID(user.id);
                }}
                className="bn49"
              >
                <span>{user.id}</span>
              </button>
            </div>
          );
        })}
      </div>
      {/* <div className="maindiv"> */}
      {/* <input
          className="input"
          type="number"
          placeholder="1"
          value={inputvalue}
          onChange={(e) => handleOnchange(e)}
        />
        <button className="bn49" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
        {(inputvalue > 2 || inputvalue < 1) && (
          <div className="text">Value can only be 1 or 2</div>
        )}
      </div> */}
      <button className="bn49" onClick={pagesubmit}>
        {" "}
        Show 2nd Page
      </button>
      <div className="maindiv">
        {show && (
          <div className="maindiv">
            {fetch2.data.map((user) => {
              return (
                <div key={user.id}>
                  {" "}
                  <button
                    onClick={() => {
                      setID(user.id);
                    }}
                    className="bn49"
                  >
                    <span>{user.id}</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
