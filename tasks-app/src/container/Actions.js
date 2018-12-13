import { connect } from "react-redux";
import { deleteTask } from "../data/actions/api";
import { patchTask } from "../data/actions/api";
import history from "../history";
import Actions from "../components/Actions";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component

const mapStateToProps = (state) =>{
	return state;
}


const mapDispatchToProps = (dispatch,{task}) => {
	
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        handleDelete: () => {
        	dispatch(deleteTask(task.id));
        	history.push("/");
        },
        handleComplete: () =>{
        	dispatch(patchTask(task.id));
        	history.push("/");
        }
        ,
    };
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Actions);