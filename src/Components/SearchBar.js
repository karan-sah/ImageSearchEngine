import React, { Component } from "react";
class SearchBar extends Component {
  state = {
    term: ""
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  };
  onSubmitChange = event => {
    event.preventDefault();
    this.props.onChange(this.state.term);
  };
  render() {
    return (
      <div className="ui segment" style={{ backgroundColor: "#3A1412 " }}>
        <form className="ui form" onSubmit={this.onSubmitChange}>
          <label style={{ color: "white " }}>Image Search</label>
          <input
            type="text"
            onChange={this.onInputChange}
            style={{ border: "2px solid #ed2d7b" }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
