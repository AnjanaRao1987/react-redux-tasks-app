import axios from "../../axios";
import history from "../../history";
// import the setTitles action
import { setTitles } from "./state";
import { addArticle } from "./state";
import { setPost } from "./state";
import { deleteArticle} from "./state";

export const getTasks = () => dispatch => {
    axios.get("/tasks").then(({ data }) => {
        // for now, just log the response data
        console.log(data);
        const tasks = data.data;

        // dispatch the setTitles action, passing along the articles List
        dispatch(setTasks(tasks));

    });
};






