// import React, { Component } from "react";
// class ImageCard extends Component {
//   constructor(props) {
//     super(props);
//     this.imgRef = React.createRef();
//   }
//   state = {
//     span: 0
//   };
//   componentDidMount() {
//     // console.log("here" + JSON.stringify(this.imgRef));
//     this.imgRef.current.addEventListener("load", this.setspan);
//     //   console.log(this.imageRef.current.clientHeight);
//     // });
//   }
//   setspan = () => {
//     const height = this.imgRef.current.clientHeight;
//     const span = Math.ceil(height / 10);
//     this.setState({
//       span
//     });
//   };
//   render() {
//     const { description, urls } = this.props.image;
//     return (
//       <div style={{ gridRowEnd: `span ${this.state.span}` }}>
//         <img alt={description} src={urls.regular} ref={this.imgRef} />
//       </div>
//     );
//   }
// }

// export default ImageCard;

import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, url: "", open: null };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ url: this.props.image.urls.regular });
    this.imageRef.current.addEventListener("load", this.setSpans);
    //this.imageRef.current.addEventListener("onClick", this.onHoverHandle);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    //      console.log(height, spans);
    this.setState({ spans });
    // this.setState({ url: this.props.image.urls });
    console.log(this.state.url + "ddddddd");
  };
  onHoverHandle = () => {
    // debugger;
    this.setState({
      url: this.props.image.urls.full
    });
    this.props.open(this.state.url);
  };

  render() {
    const { description, urls } = this.props.image;
    console.log(urls)
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          padding: "2rem",
          overflow: "hidden",
          alignContent: "center",
          alignItems: "center",
          marginRight: "2rem"
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
