import React from 'react';

export default function todoList(props) {
    return (
        <> 
            <div className="todo_style">
                <i onClick={()=>{props.delItem(props.item.id)}} className="fa fa-times" aria-hidden="true" />
                <li>{props.item.todo}</li>
            </div>
        </>
    )
}