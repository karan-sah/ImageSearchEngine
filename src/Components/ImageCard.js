import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, url: "", open: null };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ url: this.props.image.urls.regular });
    dwfavaf;
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  onHoverHandle = () => {
    this.setState({
      url: this.props.image.urls.full,
    });
    this.props.open(this.state.url);
  };

  render() {
    const { description, urls } = this.props.image;
    console.log(urls);
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          padding: "2rem",
          overflow: "hidden",
          alignContent: "center",
          alignItems: "center",
          marginRight: "2rem",
        }}
      >
        <a href={this.state.url}>
          <img
            ref={this.imageRef}
            alt={description}
            src={this.state.url}
            onClick={this.onHoverHandle}
          />
        </a>
      </div>
    );
  }
}

export default ImageCard;
