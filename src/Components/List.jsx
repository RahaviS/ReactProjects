import React from "react";
import add, { sub, mul, div } from "./calculator";

function List() {
  return (
    <ul>
      <li>{add(3, 2)}</li>
      <li>{sub(10, 5)}</li>
      <li>{mul(2, 2)}</li>
      <li>{div(5, 2)}</li>
    </ul>
  );
}
export default List;
