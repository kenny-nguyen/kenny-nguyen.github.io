import React, {Component} from 'react';
//import Todos from './Todos';

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <div class="dropdown-divider"></div>
                        <label for="exampleTextarea">Leave a comment: </label>
                        <textarea class="form-control" id="exampleTextarea" rows="3" type="text" onChange={this.handleChange} value={this.state.content} placeholder="Enter Comment"></textarea>
                    </div>
                    <button class="btn btn-outline-primary">Comment</button>
                </form>
            </div>
        )
    }

}

export default AddTodo;