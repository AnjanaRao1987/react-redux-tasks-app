import { connect } from "react-redux";
import Edit from "../components/Edit";
import history from "../history";
import { putTask } from "../data/actions/api";

const mapStateToProps = (state ,{id}) => {
   let task = state.tasks.filter(task=>(task.id===id));
   let fields = (task[0])?[
    		{ name: "task", label: "task", value:task[0].task },
		]:null;   
    return {
       fields:fields,
    };
};

const mapDispatchToProps = (dispatch,{id}) => {
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        handleSubmit: data => {
          dispatch(putTask(id,data));
          history.push("/");
        },

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Edit);