import React from "react";
import CommonList from "./common/CommonList";



function ToDoListComponent(props) {
    const { todoList = [], onCheckTask } = props;
    return (
        <div className="col-md-4">

            <CommonList
                Title="To Do List"
                list={todoList}
                checboxValue={false}
                onChangeTask={onCheckTask}
                noResult="No Todo Added Yet"
            />

        </div>
    )
}


export default ToDoListComponent;