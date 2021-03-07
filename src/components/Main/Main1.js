import React ,{useState}from 'react'
import TodoList from '../Memo/TodoList'
import Style from './Main1.module.scss'

function Main1() {
    const [article,setArticle]=useState('');
    const [todos,setTodos]=useState([])
    const [checkBox,setCheckBox]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('create new todos')
        setTodos([...todos, { id: todos.length, text:article, isCompleted: false }]);
        setArticle('')

    }

    const completeTodo = (id) => {
        const done = todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
        setTodos(done)
    };

    // Delete
    const deleteHandler = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    } ;

    
    return (
        <div>
        <h2>Life target & Goal</h2>
        <h3>あなたの目標を書いてください（最低20個）</h3>
                <form onSubmit={handleSubmit} className={Style.input}>
                    <input type="text" placeholder="target&goal" value={article} onChange={event =>setArticle(event.target.value)} />
                    <input type="submit" value="夢よ叶え" className={Style.button}/>
                </form>
                <div>
                <ul>
                    {todos.map(todo => (
                        <TodoList
                            todo={todo}
                            key={todo.id}
                            completeTodo = {completeTodo}
                            deleteHandlers = {deleteHandler}
                        />
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Main1
