import {GET_USERS_PENDING, GET_USERS_SUCCESS, GET_USERS_FAILED} from '../actions/types';
const initialState={
    users:[],
    isPending: false,
    error: ''
}
export const fetchUsers=(state=initialState, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_USERS_PENDING:
            return {...state, isPending: true};
        case GET_USERS_SUCCESS:
            return {...state, users: payload, isPending: false};
        case GET_USERS_FAILED:
            return {...state, error:payload};

        default:
            return state;
    }
}