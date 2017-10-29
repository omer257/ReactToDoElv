import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }
    handleSubmit(event) { 
        this.props.addTodo(this.state.input);
        this.setState({input: ''})
        event.preventDefault();//Prevent the event - submit,click etc.
    }
    render() {
        return (
            <div className="App">
                <form className="form-inline" onSubmit={this.handleSubmit} action="#">
                    <div className="form-group">
                        <input type="text" require='true' className="form-control" id="input" value={this.state.input} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;