import React , { Component }  from "react";

import { Link } from "react-router-dom";

import Add from '../container/Add';
import Actions from '../container/Actions';

class Tasks extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { tasks } = this.props;
        return (
            <React.Fragment>
            <Add />
            <ul className="list-group mx-auto justify-content-center" style={{width:'50%'}}>
                { tasks.map(task => (
                    <li className="list-group-item" key={ task.id } style={{backgroundColor:task.completed?'#E8F7DC':'#EED69D'}}>
                        { /* link to the article using its id */ }
                        <span style={{fontSize:20}}>{ task.task }</span>
                        <Actions task={task}/>
                    </li>
                ))}
            </ul>
            </React.Fragment>
        );
    }
}
export default Tasks;