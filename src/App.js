import React from "react";
import Nav from "./Nav";
import Input from "./Input";
import List from "./List";

const axios = require("axios");

class App extends React.Component {
  state = {
    input: [],
    value: ""
  };
  //Add strike through
  // done = item => {
  //   console.log(item);
  //   item.title.style.textDecoration = "line-through";
  //   axios
  //     .put(`http:localhost:3000/${item.id}`, item)
  //     .then(response => console.log(response));
  //   // event.target.style.textDecoration = "line-through";
  // };

  //add todo works
  addItem = value => {
    axios
      .post("http://localhost:3000/todos", { title: `${value}` })
      .then(response => {
        this.setState({ input: [...this.state.input, response.data] });
      })
      .catch(err => console.log(err));
  };

  //Todo : complete axios for delete DONE ✔
  deleteItem = item => {
    //using axios
    //Delete done
    axios
      .delete(`http://localhost:3000/todos/${item.id}`)
      .then(response => {
        this.setState({ input: this.state.input.filter(i => i !== item) });
      })
      .catch(err => console.log(err));

    //normal

    // this.setState({ input: this.state.input.filter(i => i !== item) }, () => {
    //   console.log("deleted", item);
    // });
  };

  componentDidMount() {
    axios
      .get("http://localhost:3000/todos")
      .then(api => {
        this.setState({ input: [...api.data] }); 
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => console.log("finished"));
  }

  render() {
    return (
      <div className="container">
        {/* {console.log(this.state.input)} */}
        <Nav />
        <Input
          handleChange={this.handleChange}
          value={this.state.value}
          addItem={this.addItem}
        />
        <List
          list={this.state.input}
          deleteItem={this.deleteItem}
          done={this.done}
        />
      </div>
    );
  }
}

export default App;
