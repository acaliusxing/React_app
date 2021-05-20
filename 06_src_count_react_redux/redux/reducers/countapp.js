import {INCREMENT, DECREMENT} from '../constant';
//create reducer function
const initState = 99
export default function countAppReducer(preState=initState, action) {
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}