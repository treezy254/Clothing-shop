import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://i.pinimg.com/564x/83/76/43/837643c0dd8e1a8b1974ad064d3f2119.jpg`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        style={{ height: "200px", width: "200px" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
