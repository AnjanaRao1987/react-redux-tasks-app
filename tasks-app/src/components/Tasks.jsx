import React , { Component }  from "react";

import { Link } from "react-router-dom";



class Tasks extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { tasks } = this.props;
        return (
            // ... the JSX code we had previously
            <ul className="list-group">
                { /* map over each article and display a list item for each one */ }
                { tasks.map(task => (
                    <li className="list-group-item" key={ task.id }>
                        { /* link to the article using its id */ }
                        <p>{task.task}</p>
                    </li>
                ))}
            </ul>

        );
    }
}
export default Tasks;