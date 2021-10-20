import React from "react";

const Square = (props) => {
  const { field } = props;
  return (
    <div>
      <h2>hei</h2>
      <h2>{field}</h2>
      console.log({field})
      <input className="field" value={field.value} readOnly={field.readOnly} />
    </div>
  );
};

export default Square;
