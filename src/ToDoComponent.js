import React, { useState } from 'react';

let InitialInputs = {
    taskName: "",
    taskDescription: "",
    repeatingTask: ""
}

function ToDoComponent(props) {
    const [inputs, setInputs] = useState({ ...InitialInputs });
    const { todoList = [], setTodolist } = props;

    const handleChange = (value, key) => {
        setInputs({
            ...inputs,
            [key]: value
        })
    }

    const handleBlur = () => {
        let objIsFilled = false;
        Object.keys(inputs).every((data) => {
            if ((inputs[data] !== null) && (inputs[data].length > 0)) {
                return objIsFilled = true
            }
            return objIsFilled = false
        })

        if (objIsFilled) {
            let newList = [...todoList];
            newList.push(inputs);
            setTodolist(newList);
            setInputs({ ...InitialInputs });
        }
    }

    return (
        <div className="col-md-4">
            <div className="todolist addTodoList">
                <div className="todolistContainer">
                    <h1>Add Todos</h1>
                    <input
                        type="text"
                        className="form-control add-todo"
                        name="taskName"
                        placeholder="Add todo"
                        label="Add todo"
                        onChange={(e) => handleChange(e.target.value, "taskName")}
                        onBlur={() => handleBlur()}
                        value={inputs.taskName}
                    />
                    <textarea
                        className="form-control add-todo"
                        placeholder="Todo Description"
                        name="taskDescription"
                        rows="4"
                        cols="20"
                        onChange={(e) => handleChange(e.target.value, "taskDescription")}
                        onBlur={() => handleBlur()}
                        value={inputs.taskDescription}
                    />
                    <select
                        name="repeatingTask"
                        className="selectTodoList"
                        onChange={(e) => handleChange(e.target.value, "repeatingTask")}
                        onBlur={() => handleBlur()}
                        value={inputs.repeatingTask}
                    >
                        <option value=""> Select One</option>
                        <option valye="Y"> Y</option>
                        <option value="N">N </option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ToDoComponent;
