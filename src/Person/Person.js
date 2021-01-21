import React from 'react';
import classes from'./Person.module.css';


const person = (props) => {
    return (
    //<div className="Person" style= {style}>
    <div className={classes.Person} style={{border: '4px dotted red' }}>
        <p onClick={props.click}>I' am  {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person;