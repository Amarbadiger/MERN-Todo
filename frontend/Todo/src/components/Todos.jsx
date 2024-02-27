import React from "react";
import styles from "./Todos.module.css";
export const Todos = ({ todos }) => {
  return (
    <div>
      <div className={styles.table}>
        <li>title</li>
        <li>description</li>
        <li>completed</li>
      </div>
      <ul>
        {todos.map((value, i) => {
          return (
            <div key={i} className={styles.table}>
              <li>{value.title}</li>
              <li>{value.description}</li>
              <button className={styles.btn}>
                {value.completed == true ? "Completed" : "Mark"}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
