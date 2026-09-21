import react from "react";

class Mounting extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("1.Constructor");
    }
    componentDidMount() {
        console.log("3.ComponentDidMount");
    }

    render() {
        console.log("2.Render");
        return (
            <h1>count: {this.state.count}</h1>
        );
    }
}

export default Mounting ;