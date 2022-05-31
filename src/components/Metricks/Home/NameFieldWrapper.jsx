import { useState } from "react";

export const NameFieldWrapper = ({ field, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const formWrapperInputs = {
    background: "transparent",
    paddingBottom: ".8125rem",
    paddingLeft: "1.0625rem",
  };

  /**render */
  return (
    <div>
      <input
        style={formWrapperInputs}
        className="border-top-0 border-left-0 border-right-0 border-secondary mx-4 pt-0"
        onChange={handleChange}
        type="text"
        name={field}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
