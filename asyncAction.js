const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS' 
const FETCH_USER_SUCCESS = 'FETCH_USER_FAILURE'

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = user => {
    return {
        type : FETCH_USER_SUCCESS,
        payload: error
    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: user
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
    }
}

const store = createStore(reducer)