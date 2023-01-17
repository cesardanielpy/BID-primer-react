import { Component } from "react";

class PersonCard extends Component {
    render() { 

        const {lastName, firstName, age, hairColor} = this.props;
        return (
            <>
            <h1>{lastName} , {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            </>
        )
    }
}

export default PersonCard;