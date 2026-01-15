const { createStore } = require("redux");


const initialState = {
          count: 0
};

function counterReducer(state = initialState, action) {
          
          switch (action.type) {
                    case "INCREMENT":
                              return {
                                        count : state.count + 1
                              }
                    case "DECREMENT":
                              return {
                                        count: state.count - 1
                              };
                    default:
                              return state;
          }
}

// store
const store = createStore(counterReducer);

console.log("initialState:", store.getState());

store.subscribe(() => {
          console.log("Updated state:", store.getState());
});

// dispatch actions

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });

