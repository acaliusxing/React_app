import {ActionTypes} from './types'

const INTI_STATE = {todos:[
    {id: "001", name:"Eating", completed:false},
    {id: "002", name:"Sleep", completed:true},
    {id: "003", name:"Coding", completed:false},
    {id: "004", name:"Shopping", completed:true}
]}

const todoReducer = (state=INTI_STATE, action) => {
    switch(action.type) {
        case ActionTypes.ADDTODO:
            return {todos: [action.data, ...state.todos]}

        case ActionTypes.DELETETODO:
            return {todos: state.todos.filter(todo=>todo.id !== action.data)}

        case ActionTypes.UPDATETODO:
            const[id, isCompleted] = action.data
            const newTodos = state.todos.map(todo=>{
                if(todo.id === id) return {...todo, completed:isCompleted}
                return todo
            })
            return {todos: newTodos}

        case ActionTypes.CHECKALLTODO:
            return {todos: state.todos.map(todo=>({...todo, completed: action.data}))}
        
        case ActionTypes.DELETEALLCOMPLETED:
            return {todos: state.todos.filter(todo => todo.completed !== true)}

        default:
            return state
    }
}

export default todoReducer