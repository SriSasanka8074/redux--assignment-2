import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionTypes from '../store/actions';
import {connect} from 'react-redux';

class Persons extends Component {
    state = {
        persons: []
    };

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personId: personId}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
