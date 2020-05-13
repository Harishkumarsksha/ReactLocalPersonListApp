import React, { Component } from 'react';
import './App.css';


const Person = (props) => {
  const { img, name, job } = props.person
  const { children } = props
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className='person'>
      <img src={url} alt='Image' />
      <div>
        <h4>{name}</h4>
        <p>{job}</p>
      </div>
    </div>
  )
}
const PersonList = (props) => {

  const people = [
    { img: 22, name: 'john', job: 'developer' },
    { img: 25, name: 'robert', job: 'artist' },
    { img: 30, name: 'kim', job: 'designer' },
  ]
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
      Test Text in the JSX
    </section>
  )
}
const App = () => (<PersonList />)

export default App;
