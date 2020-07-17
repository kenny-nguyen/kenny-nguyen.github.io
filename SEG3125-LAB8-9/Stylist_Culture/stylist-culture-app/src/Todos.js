import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    // Checks length of todoList. If list is not empty, run first function otherwise run the second function
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className = "collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">There are currently no comments. Be the first!</p>
    )

    return(
        <div className="todos-collection">
            {todoList}
        </div>
    )
}

export default Todos;