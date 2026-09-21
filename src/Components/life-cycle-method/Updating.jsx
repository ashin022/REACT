import React from "react";

class UpdatingCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }

render() {
    return (
        <div>
            <h1>count: {this.state.count}</h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 

            })
            }
            >
                Increment

            </button>
        </div>
    );
}
}

export default UpdatingCounter
