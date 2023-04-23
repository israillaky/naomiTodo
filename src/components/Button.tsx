import React from "react";

const Button = ({ onClick, label, className, id }) => {
  return (
    <div>
      <button onClick={() => onClick(id)} className={className}>
        {label}
      </button>
    </div>
  );
};

export default Button;
