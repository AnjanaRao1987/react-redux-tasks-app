import { connect } from "react-redux";
import { deleteTask } from "../data/actions/api";
import history from "../history";
import Actions from "../components/Actions";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = (dispatch,{task}) => {
	
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        handleDelete: () => {
        	console.log(task.id);
        	dispatch(deleteTask(task.id));
        	history.push("/");;
        },
    };
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Actions);