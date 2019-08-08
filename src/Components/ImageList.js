import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  let open = current => {
    console.log(current);
    //  alert("hi");
    return (
      <div
        style={{
          postion: "absolute",
          height: "fit-content",
          width: "fit-content",
          maxWidth: "65%",
          maxHeight: "70%",
          backgroundColor: "red"
        }}
      >
        <img src={current} alt="img" />
      </div>
    );
  };
  let images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} open={open} />;
  });
  return (
    <div
      className="imageList"
      style={{ backgroundColor: "#3A1412 ", borderRadius: ".25rem" }}
    >
      {" "}
      {open}
      {images}
    </div>
  );
};
export default ImageList;
