import React, {Component} from 'react';
import Overview from './components/Overview'

class App extends Component {
  constructor() {
    super()

    this.state = {
      task: "",
      tasks: []
    }

    this.textChange = this.textChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }
  textChange(e) {
    const val = e.target.value
    this.setState({task: val})
  }
  addTask(e) {
    e.preventDefault()
    const {task, tasks} = this.state
    this.setState({
      task: "",
      tasks: tasks.concat(task)
    })
  }
  deleteTask(id) {
    const array = this.state.tasks
    array.splice(id, 1)
    this.setState({tasks: array})
  }

  render() {
    const {task, tasks} = this.state

    return (
      <div className="col-6 mx-auto mt-5" id='app'>
        <form onSubmit={this.addTask} >
        <div className='form-group'>
          <label htmlFor="task">Enter Task: </label>
          <input type="text" className="form-control" id="task" name="task" onChange={this.textChange} value={task}/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </div>
        </form>
        <Overview tasks={tasks} remove={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
