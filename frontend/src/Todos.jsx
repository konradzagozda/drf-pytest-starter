import { memo } from "react";

/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
  console.log("Todos rendered");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
