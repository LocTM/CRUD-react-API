import {Component} from "react";

export default class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Ha Linh",
            age: 20,

        }
    }

    render() {
        return(
            <>
                <h1>{this.state.name} | {this.state.age}</h1>
                <input type="text" onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    })
                }
                }/>
                <h2></h2>
            </>
        )
    }
}