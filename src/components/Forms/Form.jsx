import React, { Component } from "react";
import Input from "./Input";

//Form component to add task 
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: props.fields.slice(),
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//Controlled input field
    handleChange(e, i) {
        const fields = this.state.fields.slice();
        fields[i].value = e.target.value;
        this.setState({ fields: fields });
    }

//Make sure input field is disabled when no value is entered in a input field
    isDisabled() {
        return !this.state.fields.every(({ value }) => value);
    }


//Method called when form is submitted
    handleSubmit(e){
        e.preventDefault(); //this makes sure page wont refresh 

        //console.log(this.state.fields);
        let data = this.state.fields.reduce((data, field) => {
        data[field.name] = field.value;
        return data;
        }, {});

        this.props.handleSubmit(data); //call handle submit of container 

        this.setState({fields:this.state.fields.map((key, index) => {
            key.value = "";
            return key;
        })});                         //Setting react initial state for all fields sent from container
    }

    render() {
        const { className, button } = this.props; //destructuring props from container
        return (
            <form onSubmit={this.handleSubmit} className={ "form" + (className ? " " + className : "") } >
                { this.state.fields.map(({ name, label, value }, i) => (
                    <Input   //Input componenet to make input appear
                        key={ i }
                        value={ value }
                        name={ name }
                        label={ label }
                        onChange={ e => this.handleChange(e, i) }
                    />
                ))}
                <button disabled={ this.isDisabled() } className="btn btn-success">{ button }</button>
            </form>
        );
    }
}

export default Form;
