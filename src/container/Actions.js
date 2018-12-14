import { connect } from "react-redux";
import { deleteTask } from "../data/actions/api";
import { patchTask } from "../data/actions/api";
import history from "../history";
import Actions from "../components/Actions";


//call mapStateToProps to get the current state.. make sure component is rerendered 
const mapStateToProps = (state) =>{
	return state;
}


const mapDispatchToProps = (dispatch,{task}) => {	
    return {
        //Delete Task Api action to delete perticular task with ID
        handleDelete: () => {
        	dispatch(deleteTask(task.id));
        	history.push("/");
        },

        //Path task API to mark a perticular task completed
        handleComplete: () =>{
        	dispatch(patchTask(task.id));
        	history.push("/");
        }
        ,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Actions);