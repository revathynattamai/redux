import React from "react";

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUsername('Anna')}>Change the Username
                    </button> 
                    <br />
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUserAge('5')}>Change the Age
                    </button>
                </div>
            </div>
        </div>
    );
};