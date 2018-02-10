import React, {Component} from 'react';
import DeleteButton from './DeleteButton';

class Task extends Component {
    render() {
        return (
            <li>
                <p>{this.props.taskContent}</p>
                <DeleteButton taskKey={this.props.taskKey} deleteTasks={this.props.deleteTasks}/>
            </li>
        )
    }
}

export default Task;