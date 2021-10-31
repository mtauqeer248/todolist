import React, { FC, ChangeEvent, useState } from "react";
import TodoTask from "../TodoTask";
import ITask from './TodoListProps'
import Styled from '@emotion/styled';

const InputFeild= Styled.input`
width:400px;
height:20px;
text-color:black;
font-size:20px;
padding:10px;
border:2px solid black;
border-radius:5px
`
const Button = Styled.button`
margin-top:20px;
width:150px;
height:30px;
font-size:20px
border-radius:4px;
color:#007bff;
text-color:#ffffff;
&:hover{
  color:#0069d9
}
`

const App:FC<ITask> = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
     
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <InputFeild
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          
        </div>
        <Button onClick={addTask} className={""} type={"submit"}>Add Task</Button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} header={"TodoList"} />;
        })}
      </div>
    </div>
  );
};

export default App;
