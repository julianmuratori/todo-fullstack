import React, {Component} from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {
        return (
            <div>
                <h5>List of Stuff that needs Doing</h5>
                <ul className="tasklist">
                    {/* <Task taskName={ this.props.listItem }/> */}
                    {
                        Object
                        .keys(this.props.listItem)
                        .map(key => <Task key={key} taskContent={this.props.listItem[key]} taskKey={key} deleteTasks={this.props.deleteTasks}/>) 
                    }
                </ul>
            </div>
        )
    }
}

export default TaskList;