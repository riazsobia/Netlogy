import React from 'react';

class Form extends React.Component {
    handleSubmit = async e => {
        e.preventDefault();
        let raw = await fetch('https://swapi.dev/api/people');
        console.log("raw: ", raw)
        let data = await raw.json();
        console.log("data : ", data);
        let count = data.count;
        console.log("count >>> ", count)
        //  each object has the name as a key, and the url as value
        console.log("data.results >>> ", data.results)
        let people = data.results.reduce((list, obj)=> {
            list[obj.name] = obj.url;
            return list;
        }, {});
        console.log(" people>>>> ", people)
        // count, people : share this data
        this.props.handler(count, people);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>{this.props.buttonText}</button>
            </form>
        )
    }
}

export default Form;