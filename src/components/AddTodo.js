import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = (event) => {
    if (event.key === 'Enter') {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
    }
  };

  render() {
    return (
      <div>
        <input style={{width:400,padding:10}}
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder="Add a new friend"
          onKeyDown={this.handleAddTodo}
        />
        {/* <button className="add-todo" onClick={this.handleAddTodo}>
          Add
        </button> */}
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
