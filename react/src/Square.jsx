import React from "react";

const Square = (props) => {
  const { field } = props;
  return (
    <div>
      <h2>hei</h2>
      <input className="field" value={field.value} readOnly={field.readOnly} />
    </div>
  );
};

export default Square;
