export const generateTodos = (data) => {
    return {type: "generateTodos", data}
}

export const addTodos = (data) => {
    return {type: "addTodos", data}
}

export const deleteTodos = (data) => {
    return {type: "deleteTodos", data}
}