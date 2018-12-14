import React from "react";
//accept input name,label, value and onChange to make it a controlled input
export default ({ name, label, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input id={ name } onChange={ onChange } value={ value } className="form-control" />
    </div>
);
