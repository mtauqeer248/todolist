import React from "react";
import ITask from "./TodoList/TodoListProps";
import Styled from "@emotion/styled";
//import Button from "./Button/ButtonComp";
const List = Styled.ul`
color: #fff;
width: 300px;
margin: 20px auto;
height: 50px;
color:#6c757d;
border:2px  solid black;
padding:5px;


`;
const Button =Styled.button`
margin-top:20px;
width:100px;
height:30px;
font-size:20px
border-radius:4px;
color:#ffc107;
text-color:#ffffff;
&:hover{
  color:#ffb507
}
`
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
  header:string;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
       
            <List>{task.taskName}</List>
            <Button
              onClick={() => {
                completeTask(task.taskName);
              }} >
              Delete
            </Button>
        
      </div>
    </div>
  );
};

export default TodoTask;
