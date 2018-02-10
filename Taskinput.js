import React, {Component} from 'react';

class Taskinput extends Component {

    createTask(event) {
        event.preventDefault();
        const task = this.toDoItem.value;
        this.props.addTasks(task);
        this.toDoForm.reset();
    }

    render() {
        return (
            <div>
                <form action="" ref={(input) => this.toDoForm = input} onSubmit={(e) => this.createTask(e)}>
                    <input type="text" placeholder="enter the To you need to Do" ref={(input) => this.toDoItem = input}/>
                    <h3>Hit Enter</h3>
                </form>
            </div>
        )
    }
}

export default Taskinput;

