import {Component} from "react";

class ImmagineClass extends Component {
    render() {
        return (
            <img src={this.props.url} alt={this.props.tagAlt} /> 
        )
    }
}

export default ImmagineClass