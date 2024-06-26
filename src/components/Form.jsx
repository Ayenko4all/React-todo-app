import styles from "../styles/Form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [formDetails, setFormDetails] = useState({ title: "", done: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...formDetails, [name]: value, done: false };
    setFormDetails(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setTodos([...todos, formDetails]);
    setFormDetails({ title: "", done: false });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.forminput}
          placeholder="Enter todo item..."
          type="text"
          name="title"
          value={formDetails?.title}
          onChange={handleChange}
        />

        <button className={styles.formbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
