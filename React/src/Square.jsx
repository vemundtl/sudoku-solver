import React from "react";

const Square = ({ field, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    if (value < 10 && value > 0 && field.value !== value) {
      onChange({ ...field, value: value });
    }
  };

  return (
    <div>
      <input
        className="field"
        value={field.value || ""}
        readOnly={field.readOnly}
        onChange={handleChange}
      />
    </div>
  );
};

export default Square;
