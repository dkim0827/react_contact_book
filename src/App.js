import React, { Component } from "react";
import "./components/css/App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  // Never use. (push, splice, unshift, pop) mutates
  // Better use. (concat, slice, map, filter) do not mutate
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "Daniel Kim",
        phone: "778-111-1111"
      },
      {
        id: 1,
        name: "Dohee Lee",
        phone: "778-222-2222"
      }
    ],
    keyword: ""
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value.toLowerCase()
    });
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      // if id === info.id render info && data else keep info
      information: information.map(info =>
        id === info.id ? { ...info, ...data } : info
      )
    });
  };

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.toLowerCase().indexOf(keyword) !== -1
    );
    return (
            <div>
              <h1>REACT CONTACT BOOK</h1>
              <PhoneForm onCreate={this.handleCreate} />
            </div>
            <p>
              <input
                placeholder="Search with Name"
                onChange={this.handleChange}
                value={keyword}
              />
            </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
