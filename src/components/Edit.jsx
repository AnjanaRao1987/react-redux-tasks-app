import React,{Component} from "react";
import FourOhFour from "./FourOhFour";
import Form from "./Forms/Form";

// Just editing Task.task

class Edit extends Component {

    render() {
        const { fields, handleSubmit } = this.props;

        return fields ? (
            <React.Fragment>
                <h2 style={{fontFamily:"Fira Sans"}}>Edit Task</h2>
                <Form className="panel-body" handleSubmit={ handleSubmit } fields={ fields } button="Edit" />
            </React.Fragment>
        ) : <FourOhFour />;
    }
}

export default Edit;
