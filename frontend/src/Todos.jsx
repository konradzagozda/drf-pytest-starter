import { memo } from "react";
import styles from "./my-style.module.scss";

/* eslint-disable react/prop-types */
const Todos = ({ todos }) => {
  console.log("Todos rendered");
  return (
    <>
      <h2 className={styles.bigblue}>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);
