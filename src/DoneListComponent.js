import React from "react";
import CommonList from "./common/CommonList";



function DoneListComponent(props) {
    const { todoListCompleted = [], onUnCheckTask } = props;
    return (
        <div className="col-md-4">
            <CommonList
                Title="Completed Task"
                list={todoListCompleted}
                checboxValue={true}
                onChangeTask={onUnCheckTask}
                noResult="Not completed any task Yet"
            />
        </div>
    )
}


export default DoneListComponent;