import React, {useState} from 'react';
import Style from './TodoList.module.scss';
import Button from '@material-ui/core/Button';



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
            <div className={Style.eventbox}>
                <label className={Style.label}>完了</label>
                <input type="checkbox" className={Style.checkbox}
                    onClick={() => completeTodo(todo.id)} 
                />
                <Button value="delete" className={Style.delete} variant="outlined" color="Primary"
                    onClick={() => deleteHandlers(todo.id)}>Delete</Button>
                    </div>  
           
        </div>
      )
 }

 export default TodoList