import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  let { id, category } = useParams();
  return (
    <div>
      Detail: {id}, category: {category}
    </div>
  );
};

export default Detail;
