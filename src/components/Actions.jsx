import React from "react";


// a component to show the Edit and Delete buttons
const Actions = ({ task, handleDelete, handleComplete}) => (
    <aside className="pull-right">
        {task.completed?"":<button 
        					onClick={ handleComplete } 
        					style= {{backgroundColor:'#FAE7E1', marginLeft:50}}
        					className="btn">Mark Complete</button>}
   
        <button 
        	onClick={ handleDelete } 
        	style= {{backgroundColor:'#FAE7E1', marginLeft:50}}
        	className="btn">Delete Task</button>
        



    </aside>
);

export default Actions;