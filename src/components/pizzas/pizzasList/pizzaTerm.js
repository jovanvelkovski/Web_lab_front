import React, {Component} from 'react';

class pizzaTerm extends Component {
    render() {
        const name = this.loadName();
        const description = this.loadDescription();

        return (
            <div>
                <h5><b>{name}</b></h5>
                {description}
                <br/>
            </div>
        );
    }

    loadName() {
        return(
            <div>
                {this.props.pizzaName}
            </div>
        )
    }

    loadDescription() {
        return(
            <div>
                {this.props.pizzaDescription}
            </div>
        )
    }
}

export default pizzaTerm;