import {GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_FAILED} from './types';
export const fetchUsers=()=>dispatch =>{
    console.log("Hello");
    dispatch({
        type: GET_USERS_PENDING
    })
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>(res.json()))
        .then(data => 
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: data
            }))
        .catch(err =>
            dispatch({
                type: GET_USERS_FAILED,
                payload: err
            }));
}