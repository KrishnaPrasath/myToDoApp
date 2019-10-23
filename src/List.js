import React from "react";

class List extends React.Component {
  done = event => {
    console.log(" asa", event.target);
    event.target.style.textDecoration = "line-through";
    console.log(event.target);
  };
  render() {
    return (
      <ul className="list-group">
        {this.props.list.map(i => {
          return (
            <div className="input-group my-3">
              <li key={i.id} className="list-group-item form-control">
                <span onClick={this.done}>{i.title}</span>
              </li>
              <div className="input-group-append">
                <button
                  className="input-group-text"
                  id="basic-addon2"
                  onClick={this.props.deleteItem.bind(this, i)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default List;
