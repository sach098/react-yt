import React from 'react';

const Card = (props) => {
  console.log(props);

  return (
    <div className="card1">
      <h1>Sachin</h1>

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="Card"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Animi consectetur odio quasi, velit dolore quos natus
        aspernatur laudantium.
      </p>

      <button>Submit</button>
    </div>
  );
};

export default Card;