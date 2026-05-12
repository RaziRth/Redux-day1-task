const { createStore, combineReducers } = require("redux");

function counterReducer(state = 0, action) {
          switch (action.type) {
                    case "INCREMENT":
                              return state + 1;
                    
                    case "DECREMENT":
                              return state - 1;
                    
                    default:
                              return state;
          }
}

// user reducer

function userReducer(state = { name: "" }, action) {
          switch (action.type) {
                    case "SET-NAME":
                              return { name: action.payload };
                    default:
                              return state;
          }
}   

// combineReducers

const rootReducer = combineReducers({

          counter: counterReducer,
          user: userReducer
});

// store

const store = createStore(rootReducer);


// dispatch

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "SET-NAME", payload: "Razi" });

console.log("Final State:", store.getState());