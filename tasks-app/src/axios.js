import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
	baseURL:"http://localhost:8000/api",
    headers: {"Accept": "application/json"},
});