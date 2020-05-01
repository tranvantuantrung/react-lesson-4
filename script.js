const todos = ["Go to market", "Buy food", "Make dinner"];

const app = document.getElementById("app");

const todoItem = todos.map(item => <li>{item}</li>);

const todoList = <ul>{todoItem}</ul>;

ReactDOM.render(todoList, app);
