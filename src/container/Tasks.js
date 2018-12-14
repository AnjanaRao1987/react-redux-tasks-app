
import { connect } from "react-redux";
import Tasks from "../components/Tasks";
import { getTasks } from "../data/actions/api";


//get current set of tasks to display
const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
};


//Dispatch an API action to get all tasks from database
const mapDispatchToProps = dispatch => {
	return {
        onLoad: () => dispatch(getTasks()),
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);