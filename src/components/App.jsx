import React from 'react';

import { TaskList } from './TaskList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      status: false,
      counter: 0,

      items: [],
    };
  }

  handleText = e => this.setState({text: e.target.value});

  onSubmit = (e) => {
    if (this.state.text === '') {
      return;
    }

    e.preventDefault();
    const updateCounter = this.state.counter + 1;
    this.setState({ counter: updateCounter });
    const newTask = { id: this.state.counter, text: this.state.text, status: false};
    this.setState({ items: [ ...this.state.items, newTask]});
    this.setState({ text: "" });
  }


  onClickRemove = (taskId) => {
    this.setState({ items: this.state.items.filter(item => item.id !== taskId)});
  }

  onClickChangeStatus = (taskId) => {
    const { items } = this.state;

    this.setState({
      items: items.map(item => (
        item.id === taskId ? {...item, status: !item.status} : item)
      )
    });
  }

  render() {

    return (
      <div>
        <form method="POST" onSubmit={this.onSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleText} />
          <input type="submit" disabled={!this.state.text} />
        </form>
        <TaskList
          tasks={this.state.items}
          onClickRemove={this.onClickRemove}
          onClickChangeStatus={this.onClickChangeStatus}
        />
      </div>
    );
  }
}


export { App };
