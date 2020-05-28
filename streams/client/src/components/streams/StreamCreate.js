import React from 'react';
import { Field, reduxForm } from 'redux-form';
// Field is a react component and reduxForm has the same functionality as connect
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // Redux form handles all of the stuff like hooking up the component to redux for us, we just have to hook up the onChange handler and value prop
    renderInput = ({ input, label, meta }) => { // Destructured formProps to get the input property out of it
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    // handleSubmit calls the function with the values from the form
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        // If you add on additional props they would get passed down to the renderInput function
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) {
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
}

// Unlike connect reduxForm takes just one parameter for configuration
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);