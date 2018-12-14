import { connect } from "react-redux";
import Add from "../components/Add";
import { addTask } from "../data/actions/api";


//Dispatching an action to call addTask API 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: data => {
        	dispatch(addTask(data));
        },
    };
};

export default connect(null, mapDispatchToProps)(Add);