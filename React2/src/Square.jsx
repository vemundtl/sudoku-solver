import React from "react";
import { useState } from "react";

const Square = ({ field }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    if (e.target.value > 10 || e.target.value < 0) {
      const value = field.value === "" ? "" : parseInt(e.target.value, 10);
      field.onChange({ ...field, value: value });
    }
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
