import React from 'react';

const Design = (props) => {
  return (
    <div class="row">
      <div class="col-md-4">
        <img src={props.data.img} height="200" />
      </div>
      <div class="col-md-4">
        <h4>{props.data.title}</h4>
        <p>rating : {props.data.rating}</p>
      </div>
      <div class="col-md-4">
        <h4>price: {props.data.offeredPrice}</h4>
        <del>{props.data.originalPrice}</del>
      </div>
    </div>
  );
};

export default Design;
