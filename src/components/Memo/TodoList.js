import React, {useState} from 'react';
import Style from './TodoList.module.scss';



function TodoList( {todo, completeTodo, deleteHandlers, updateHandler } ) {



    return (
        <div　className={Style.container}>
        
            <div className={Style.input}
                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
                
                {(todo.isCompleted) ? (
                    <p className="doneTodo">{ todo.text }</p>
                ):(
                    <p>{ todo.text}</p>
                )}
            </div>
            <div>
                <label className={Style.label}>完了</label>
                <input type="checkbox" className={Style.checkbox}
                    onClick={() => completeTodo(todo.id)} 
                />
                <button value="delete" className={Style.delete}
                    onClick={() => deleteHandlers(todo.id)}>Delete</button>
                    </div>  
           
        </div>
      )
 }

 export default TodoList