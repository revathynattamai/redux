import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger, { createLogger } from "redux-logger";
// import { User } from './components/user';
// import { Main } from './components/main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Anirud"
//         };
//     }

//     changeUsername(e) {
//         this.setState({
//             username: e.target.value
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <input type="text" onChange={this.changeUsername.bind(this)} />
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('root'));

const userInitialState = {
    name: ""
}

const mathInitialState = {
    age: ""
}

const math = (state = mathInitialState, action) => {
    switch (action.type) {
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
}

const myLogger = (state) => (next) => (action) => {
console.log(next(action));

}

const user = (state = userInitialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
    }
    return state;
}

const store = createStore(
    combineReducers({ math, user }),
    {},
    applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("State", store.getState());
})

store.dispatch({
    type: "SET_NAME",
    payload: "Anirud"
});

store.dispatch({
    type: "SET_AGE",
    payload: 5
});