import React from 'react';
import { Field, reduxForm } from 'redux-form';
// Field is a react component and reduxForm has the same functionality as connect

class StreamCreate extends React.Component {
    // Redux form handles all of the stuff like hooking up the component to redux for us, we just have to hook up the onChange handler and value prop
    renderInput({ input }) { // Destructured formProps to get the input property out of it
        return <input {...input} />;
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
}

// Unlike connect reduxForm takes just one parameter for configuration
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);