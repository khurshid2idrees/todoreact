import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input-box-todo"
          placeholder="Enter your todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={()=>{
          props.addList(inputText);
          setInputText('');
        }} className="add-btn">+</button>
      </div>
    </>
  );
};

export default TodoInput;
