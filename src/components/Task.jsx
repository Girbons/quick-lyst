import React from 'react';

class Task extends React.Component {

  render() {
    return (
      <div>
        Status: {this.props.status.toString()}
        <input type="checkbox" onClick={() => this.props.onClickChangeStatus(this.props.id)}/>
        {this.props.text}
        <button onClick={() => this.props.onClickRemove(this.props.id)} className="fa fa-trash" />
      </div>
    );
  }
}


export { Task };
