import React from "react";
import Card from "./Card.jsx";

const Tours = ({ tours,removeTour }) => {
  return (
    <>
      <div className="container">
        <div>
          <h2 className="title">Plan with Love</h2>
        </div>
        <div className="cards">
          {tours.map((tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
