
import {INCREMENT, DECREMENT} from '../constant';

//return an object
export const increment = (data) => {
    return {type:INCREMENT, data}
}

export const decrement = (data) => {
    return {type:DECREMENT, data}
}
// async action, return a function
export const incrementAsync = (data, intervalTime) => {
    return (dispatch)=> {
        setTimeout(()=>{
            dispatch(increment(data))
        }, intervalTime)
    }
}