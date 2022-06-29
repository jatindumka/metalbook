import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";
import Search from "./Search";

const TodoList = ({ todos, allIds }) => {
  const [pageNo, setPageNo] = useState(0);
  // const [displayTodos,setDisplayTodos]=useState();
  // useEffect(setDisplayTodos(),[])

  const handlePageChange=(val)=>{
    if(val==="prev"&&pageNo!==0)
      setPageNo(pageNo-1)
    else if(val==="next"&&pageNo+4<todos.length)
      setPageNo(pageNo+1)
  }
 
  return(<div>
    {/* <h3>Friends</h3> */}
    {/* {!!(allIds && allIds.length) && <Search />} */}
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
          if(index>4*pageNo-1&&index<=pageNo*4+4-1)
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
        : "No Friends"}
    </ul>
    {todos && todos.length?
    <div>
     
    <button style={{pointerEvents: pageNo===0?"none":"auto"}} onClick={()=>handlePageChange("prev")}>prev</button>
    page no: {pageNo+1}
    <button style={{pointerEvents: pageNo*4+4<todos.length?"auto":"none"}} onClick={()=>handlePageChange("next")}>next</button>
    
    </div>:null}
  </div>
  )
};

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos, allIds: state.todos.allIds };
};
export default connect(mapStateToProps)(TodoList);
