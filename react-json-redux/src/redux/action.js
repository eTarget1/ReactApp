import * as types  from './actionType';
import axios from 'axios';

const getUsers=(users)=>({
    type: types.GET_USERS,
    payload: users,
})
const userDeleted =()=>({
    type: types.DELETE_USER,
})


export const loadUsers =()=>{
    return function(dispatch){
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) =>{
                console.log('resp', resp)
                dispatch(userDeleted(resp.data));
            })
            .catch((error) => console.log(error))
    }
}

export const deleteUser =(id)=>{
    return function(dispatch){
        axios
            .get(`${process.env.REACT_APP_API}${id}`)
            .then((resp) =>{
                console.log('resp', resp)
                dispatch(getUsers(resp.data));
                dispatch(loadUsers());
            })
            .catch((error) => console.log(error))
    }
}