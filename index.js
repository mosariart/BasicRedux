const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddelware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";


function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: "First Redux Action"
    }
}
//this is the second way of having multiple reducers 
//and in this way we seperated each part of the global
//store that each reducer is working on
const cakesState = {
    numberOfCakes: 10,
}
const cakeReducer = (state = cakesState,action) =>{
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,numberOfCakes: state.numberOfCakes - 1
            }
    
        default:
            return state;
    }
}

const iceCreamState = {
    numberOfIceCreams: 20
}
const iceCreamReducer = (state = iceCreamState,action) =>{
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,numberOfIceCreams: state.numberOfIceCreams - 1
            }
    
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddelware(logger));
console.log("initial state",store.getState());
const unsubscribe = store.subscribe(()=> console.log('updated state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();