import React from "react";


// a component to show the Edit and Delete buttons
const Actions = ({ task, handleDelete }) => (
    <aside className="pull-right">
   
        <button onClick={ handleDelete } style= {{backgroundColor:'#FAE7E1', marginLeft:50}}className="btn">Delete Task</button>
    </aside>
);

export default Actions;