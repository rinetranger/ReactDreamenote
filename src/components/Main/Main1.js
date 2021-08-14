
import TodoList from '../Memo/TodoList'
import Style from './Main1.module.scss'
import createPersistedState from 'use-persisted-state';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useArticleState = createPersistedState('article');
const useTodosState = createPersistedState('todos');
const usCheckBoxState = createPersistedState('checkBox');



function Main1() {
    const [article,setArticle]=useArticleState('');
    const [todos,setTodos]=useTodosState([])

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
    };

    
    return (
        <div className={Style.container}>
       
            <Typography variant="h2" component="h2">Life target & Goal</Typography>
                <h3 className={Style.title1}>あなたの目標を書いてください。</h3>
                    <form onSubmit={handleSubmit} className={Style.input}>
                        <input type="text" placeholder=" target&goal" value={article} onChange={event =>setArticle(event.target.value)} className={Style.textinput}/>
                    
                        <Button variant="outlined" type="submit" value="入力"  color="Secondary">入力</Button>
                    </form>
                    <div>
                        <ul className={Style.ul}>
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
