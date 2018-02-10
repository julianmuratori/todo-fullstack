import React, { Component } from 'react';

class DeleteButton extends Component {
    
    deleteTask(e) {
        const thisThingsKey = this.props.taskKey;
        e.preventDefault();
        // console.log(thisThingsKey)
        this.props.deleteTasks(thisThingsKey);
    }
    
    render() {
        return (
            <button onClick={(e) => this.deleteTask(e)}>Delete Me!</button>
        )
    }
}

export default DeleteButton;