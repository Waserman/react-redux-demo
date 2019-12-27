import axios from 'axios';

// ToDos actions
const fetchToDos = (result) => ({
    type: 'FETCH_TODOS',
    result
})

export const fetchToDosApi = () => async (dispatch) => {
    console.log('fetchToDosApi');
    const res =await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    });
    dispatch(fetchToDos(res.data));
}

// Users actions
const fetchUsers = (result) => ({
    type: 'FETCH_USERS',
    result
})

export const fetchUsersApi = () => async (dispatch) => {
    console.log('fetchUsersApi');
    const res =await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    });
    dispatch(fetchUsers(res.data));
}