import axios from 'axios';

// ToDos actions
const fetchToDos = (result) => ({
    type: 'FETCH_TODOS',
    result
})

export const  fetchToDosApi = () => async (dispatch) => {
    const res =await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    });
    dispatch(fetchToDos(res));
}

// Users actions
const fetchUsers = (result) => ({
    type: 'FETCH_USERS',
    result
})

export const  fetchUsersApi = () => async (dispatch) => {
    const res =await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    });
    dispatch(fetchUsers(res));
}