import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./reducer/user";

function App() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const onClickHandler = (e) => {
    dispatch(getUser()).then((result) => {
      // console.log(result.action.payload.title);
      console.log(result.payload.title);
      return setTitle(result.payload.title);
    });
  };

  return (
    <>
      <h1>Redux Practice</h1>
      <button onClick={onClickHandler} name="dongs">
        Click Me
      </button>

      {title ? title : "내용없음"}
    </>
  );
}

export default App;
