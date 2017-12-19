import React from "react";
import {connect} from "react-redux";

import { User } from "../components/user";
import { Main } from "../components/main";
import { setName } from "../actions/user";
import { setAge} from "../actions/math";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main 
                changeUsername={() => this.props.setName("Anna")}
                changeUserAge={() => this.props.setAge(5)}/>
                <User username={this.props.user.name}
                 userage={this.props.math.age}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.user,
        math: state.math
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName:(name) =>{
            dispatch(setName(name));
        },
        setAge:(age) =>{
            dispatch(setAge(age));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);