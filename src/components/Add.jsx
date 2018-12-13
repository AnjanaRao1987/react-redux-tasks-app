import React from "react";

import Form from "./Forms/Form";

// the fields the form should have
const fields = [
    { name: "task", label: "", value: "" },
];

// the add article component
const Add = ({handleSubmit}) => (
    <React.Fragment>
        <h2 style={{fontFamily:"Fira Sans",marginLeft:20}}>Add Task</h2>
        <Form handleSubmit = {handleSubmit} className="panel-body" fields={ fields } button="Add Task" />
    <hr />
    </React.Fragment>
);

export default Add;