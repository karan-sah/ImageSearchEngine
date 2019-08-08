import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import ImageList from "./Components/ImageList";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.onSearchSubmit.bind(this);
  // }
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    if (response.data.results.length !== 0) {
      this.setState({ images: response.data.results });
    } else {
      console.log("no data came");
    }

  };
  render() {

    return (
      <div className="App ui container" style={{ marginTop: "10px" }}>
        <SearchBar onChange={this.onSearchSubmit} />
        found {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
