const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    loading: false,
    users: [],
    error:''
}
const FETCH_DATA_REQUEST = "FETCH_DATE_REQUEST"
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

const fetchUsersRequest = ()=>{
    return {
        type:FETCH_DATA_REQUEST
    }
}
const fetchUsersSuccess = ()=>{
    return {
        type:FETCH_DATA_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = ()=>{
    return {
        type:FETCH_DATA_FAILURE,
        payload: error
    }
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return{
                ...state,loading:true
            }
        case FETCH_DATA_SUCCESS:
            return {
                loading:false,data:action.payload,error:''
            }
        case FETCH_DATA_FAILURE:
            return {
                loading:false,
                users:[],
                error:action.payload
            }
        default:return state;
    }
}

const store = createStore(reducer);