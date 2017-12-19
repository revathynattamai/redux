import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
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

const initialState = {
    result: 1,
    lastValues: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "Sub":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("State", store.getState());
})

store.dispatch({
    type: "Add",
    payload: 100
});

store.dispatch({
    type: "Sub",
    payload: 50
});