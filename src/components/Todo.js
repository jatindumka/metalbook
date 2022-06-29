import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo,deleteTodo } from "../redux/actions";
import { AiTwotoneDelete, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
const Todo = ({ todo, toggleTodo ,deleteTodo}) => (
  <li className="todo-item">
    <span
      className={cx(
        "todo-item__text"
      )}
    >
      {todo.name}
      <div style={{color:"gray"}}>is your friend</div>
      </span>
      <span style={{marginLeft:"auto",alignSelf:"center"}}>      
        {!todo.favourite ? <AiOutlineStar className="icon-border" onClick={() => toggleTodo(todo.id)} /> :
        <AiTwotoneStar className="icon-border" onClick={() => toggleTodo(todo.id)} />}
        <AiTwotoneDelete className="icon-border"  onClick={() => {
        console.log("deleting")
        deleteTodo(todo.id)}} />
        </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo,deleteTodo }
)(Todo);
