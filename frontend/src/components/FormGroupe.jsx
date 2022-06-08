import React from "react";

const FormGroupe = ({ children, value, name, onChange, type = "text" }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={children}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormGroupe;
