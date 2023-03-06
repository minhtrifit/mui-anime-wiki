import { React } from "react";
import "../Card/Card.css";

const MyCard = (props) => {
  const { img, title, id, handleViewDetail } = props;
  return (
    <div className="card">
      <img src={img} alt={id} />
      <div className="info">
        <p>{title}</p>
        <button
          onClick={(e) => {
            handleViewDetail(id);
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default MyCard;
