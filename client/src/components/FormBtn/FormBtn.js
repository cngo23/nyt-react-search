import React from "react";

const FormBtn = (props) => (
    <button {...props} className="btn btn-warning">
        {props.children}
    </button>
);

export default FormBtn;