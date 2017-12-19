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

export default math;