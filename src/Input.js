import React from "react";

class Input extends React.Component {
  state = { value: "" };
  handleClick = () =>{
    this.props.addItem(this.state.value)
    this.setState({value : ""})
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className="input-group ">
        <input
          className="form-control"
          type="text"
          placeholder="task...."
          onChange={this.handleChange}
          value={this.state.value}
        ></input>
        <button
          className="btn btn-dark btn-block"
          onClick={this.handleClick}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default Input;
