import axios from "axios";

export const GET_USER = "GET_USER";

export function getUser() {
  const res = axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      return res.data;
    });

  //   console.log();

  return {
    type: GET_USER,
    payload: res,
  };
}

export default function userReducer(state = {}, action) {
  //   console.log(action);
  switch (action.type) {
    case GET_USER:
      console.log("???");
      return { ...state, payload: action.payload };

    case "GET_USER_FULFILLED":
      console.log("??");
      return state;

    default:
      return state;
  }
}
