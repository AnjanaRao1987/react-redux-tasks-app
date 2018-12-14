import { connect } from "react-redux";
import Edit from "../components/Edit";
import history from "../history";
import { putTask } from "../data/actions/api";


//mapStateToProps to ge the current task to be displayed to edit
const mapStateToProps = (state ,{id}) => {
   let task = state.tasks.filter(task=>(task.id===id));
   let fields = (task[0])?[
    		{ name: "task", label: "task", value:task[0].task },
		]:null;   
    return {
       fields:fields,
    };
};


//Dispatch an API action putTask to amend task in database
const mapDispatchToProps = (dispatch,{id}) => {
    return {
        handleSubmit: data => {
          dispatch(putTask(id,data));
          history.push("/");
        },

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Edit);