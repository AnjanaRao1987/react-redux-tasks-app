import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    //baseURL: "http://Anjana.restful.training/api/",
	baseURL:"http://localhost:8000/api",
    // use your own key
    //params: {"key": "4f60fa0a6ab41ad336fbac2ed8a7406628968098"},

    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});