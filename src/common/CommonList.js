import React from "react";

function CommonList(props) {
    const { list = [], checboxValue, onChangeTask, Title, noResult } = props;
    return (
        <div className="todolist">
            <h1>{Title}</h1>
            <ul id="sortable" className="list-unstyled">
                {
                    list && list.length ? list.map((data, index) => {
                        return (
                            <li className="ui-state-default" key={index}>
                                <div className="checkbox">
                                    <input type="checkbox" value="" onChange={(e) => onChangeTask(index)} checked={checboxValue} />
                                    <div className="list-ui">
                                        <h5>{data.taskName}</h5>
                                        <p>Description : <span>{data.taskDescription} </span></p>
                                        <p>Repeating Task : <span>{data.repeatingTask} </span> </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                        : <li>{noResult} </li>
                }
            </ul>
        </div>
    )
}

export default CommonList