import React from 'react';
import { Component } from 'react';  
//import AppNavigation from './NavigationBar/AppNavigation';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
    state ={
        persons : [
            {id:'sdde', name:'Max', age: 28},
            {id:'jhmkj', name:'Ansh', age: 2},
            {id:'uiyt', name:'Arjun', age: 6}
        ],
        otherState: 'some other value',
        showPersons : false
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice (personIndex,1);
        this.setState({persons: persons});
    }

    nameChangeHandler = ( event, id ) =>{
        
        const personIndex = this.state.persons.findIndex(p =>{
            return p.id === id;
        });
        console.log(personIndex);
        const person = {
           ...this.state.persons[personIndex]
        };
        console.log(person);
        //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        console.log(event.target.value);
        const persons = [...this.state.persons];
        console.log(person);
        persons[personIndex] = person;

        this.setState ( {persons : persons});
        console.log(this.state.persons);
    }

    togglePersonsHandler = () => {
        console.log("In fun");
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler} />;
        } 

        
        return (
            <div className={classes.App}>
                <Cockpit 
                  title={this.props.appTitle}
                  showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  clicked={this.togglePersonsHandler} />
                {persons}
            </div>
            
        );
    }
}


// function App() {
      
//     return ( 
//         <>
//             <div> <AppNavigation />  
//             </div>

//             <div className = "App">
//                 <h1>Hi,I am React App</h1>
//                 <p>This is really working!</p>
//                 <button>Switch Name</button>
//                 <Person name="Arjun" age="6"/>
//                 <Person name="Ansh" age="2">My Hobbies:songs</Person>
//                 <Person name="Riva" age="2"/>

//             </div>   
//         </>
//     );
// }

export default App;