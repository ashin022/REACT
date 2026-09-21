import react from "react";

class UnMounting extends react.Component {
    componentWillUnmount() {
        console.log("Component is removed");
    }

    render() {
        return <h1>Counter</h1>;
    }
}

export default UnMounting