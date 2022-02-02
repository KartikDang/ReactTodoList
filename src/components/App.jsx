import React, { useState } from "react";
import Items from "./ToDoListItems";
import Input from "./inputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function Delete(id) {
    setItems((prev) => {
      return prev.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input change={handleChange} add={addItem} text={inputText} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <Items name={todoItem} id={index} onChecked={Delete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
