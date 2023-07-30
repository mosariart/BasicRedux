//the below line is just equal to import in react
const redux = require('redux');
const createStore = redux.createStore;


const BUY_CAKE = "BUY_CAKE";

//we could have added the object containing the type
//and other info to dispatch( like we do in useReducer)
//but with this setup if we needed to change something 
//we just change in once.
function buyCake(){
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}
const initialState = {
    numberOfCakes: 10
}
const reducer = (state = initialState,action) =>{
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,numberOfCakes: state.numberOfCakes - 1
            }
    
        default:
            return state;
    }
}
//below line we just created the store and set the corresponding reducer
const store = createStore(reducer);
//here we just printed the current(first) info in our store
console.log("initial state",store.getState());
//below line we subscribed an order that will happend every time that
//our store changes
const unsubscribe = store.subscribe(()=> console.log('updated state',store.getState()));
//and we just dispatched buyCake couple of times to change the store
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();