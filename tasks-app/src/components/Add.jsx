import React from "react";

import Form from "./Forms/Form";

// the fields the form should have
const fields = [
    { name: "task", label: "Task", value: "" },
];

// the add article component
const Add = ({handleSubmit}) => (
    <React.Fragment>
        <h2>Add Task</h2>
        <Form handleSubmit = {handleSubmit} className="panel-body" fields={ fields } button="Add Task" />
    </React.Fragment>
);

export default Add;