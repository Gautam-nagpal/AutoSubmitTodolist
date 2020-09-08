import React, { useState } from 'react';
import ToDoComponent from './ToDoComponent';
import ToDoListComponent from './ToDoListComponent';
import DoneListComponent from './DoneListComponent';


function App() {
  const [todoList, setTodolist] = useState([])
  const [todoListCompleted, settodoListCompleted] = useState([])

  const onCheckTask = (index) => {
    let data = todoList.splice(index, 1);
    let newtodoListCompleted = [...todoListCompleted, data[0]]
    settodoListCompleted(newtodoListCompleted)
    setTodolist(todoList)
  }

  const onUnCheckTask = (index) => {
    let data = todoListCompleted.splice(index, 1);
    let newtodoList = [...todoList, data[0]]
    setTodolist(newtodoList)
    settodoListCompleted(todoListCompleted)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <ToDoComponent setTodolist={setTodolist} todoList={todoList} />

          <ToDoListComponent todoList={todoList} onCheckTask={onCheckTask} />

          <DoneListComponent todoListCompleted={todoListCompleted} onUnCheckTask={onUnCheckTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
