import React from "react";

const Square = ({ field, onChange }) => {
  const handleChange = (e) => {
    const value = field.value === "" ? "" : parseInt(e.target.value, 10);
    onChange({ ...field, value: value });
  };

  return (
    <div>
      <input
        className="field"
        value={field.value}
        readOnly={field.readOnly}
        onChange={handleChange}
      />
    </div>
  );
};

export default Square;
