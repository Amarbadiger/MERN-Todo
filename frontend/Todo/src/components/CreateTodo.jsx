import React, { useState } from "react";
import styles from "./CreateTodo.module.css";
export const CreateTodo = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  return (
    <>
      <h1
        style={{
          fontsize: 80,
        }}
      >
        To-DO List
      </h1>
      <div className={styles.Heading}>
        <input
          type="text"
          placeholder="Title"
          className={styles.title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Description"
          className={styles.desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button
          className={styles.btn}
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: desc,
              }),
              headers: {
                "Content-type": "application/json()",
              },
            }).then((res) => res.json());
            alert("Todo Created");
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};
