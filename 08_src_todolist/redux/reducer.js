const INITI_STATE = {
    todos: []
}

const todoReducer = (state = INITI_STATE, action) => {
    switch(action.type){
        case "generateTodos":
            return {todos: action.data}
        case "addTodos":
            return {todos: [action.data, ...state.todos]}
        case "deleteTodos":
            return {todos: state.todos.filter(todo => todo.id !== action.data)}
        default:
            return state
    }
}

export default todoReducer