import {ActionTypes} from './types'

export const addTodo = (data) => ({type:ActionTypes.ADDTODO, data})

export const deleteTodo = (data) => ({type:ActionTypes.DELETETODO, data})

export const updateTodo = (data) => ({type:ActionTypes.UPDATETODO, data})

export const checkAllTodo = (data) => ({type:ActionTypes.CHECKALLTODO, data})

export const deleteAllCompleted = (data) => ({type:ActionTypes.DELETEALLCOMPLETED, data})