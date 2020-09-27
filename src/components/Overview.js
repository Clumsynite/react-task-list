import React, {Component} from 'react';
import uniqid from 'uniqid'
import './Overview.css'

class Overview extends Component{
  render() {
    const { tasks, remove, edit } = this.props 
    return (
      <div id='overview' style={{marginTop: 20}}>
        <ul className="list-group">
          {tasks.map((task, index) => {
            return <li className="list-group-item space" key={uniqid()}>
              {`${index+1}. ${task}`}
              <span className="space">
                <i className="material-icons windows pointer" onClick={() => edit(index)}>edit</i>
                <i className="material-icons red pointer" onClick={() => remove(index)}>delete</i>
              </span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

export default Overview;
