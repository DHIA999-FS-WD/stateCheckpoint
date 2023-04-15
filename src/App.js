import './App.css';
// Importing React and Component from react
import React, { Component } from 'react';
// Importing image file
import Src from './img/dhia.jpg';

// Defining App component as a class-based component
class App extends Component {
   // Defining state
  state={
    person:{
          fullName:'Dhia Bouzaiene',
          bio:'Hello this my bio',
          profession:'Web developper',
          imgSrc:Src
          },
    shows:false,//Boolean to toggle profile visibility
    timeInterval:0,// State to track time interval since component mounted
  };

  // Method to toggle profile visibility
  toggleShow=()=>{
    this.setState({shows : !this.state.shows})
  }
  // Lifecycle method called after component mounts
  componentDidMount(){
     // Setting an interval to update timeInterval state every second
    this.interval = setInterval(() => {
      this.setState({timeInterval : this.state.timeInterval + 1})
    }, 1000);
  }
  
  render() {
    // Destructuring state variables
    const { person, shows, timeInterval } = this.state;
    const {fullName,bio,imgSrc,profession} = person;
    return (
      <div className='App'>
          {shows &&(
            <>
              <img className='img' src={imgSrc} alt="" style={{}} />
              <div className='text'>{fullName}</div>
              <div className='text'>{bio}</div>
              <div className='text'>{profession}</div>
            </>
          )}

            {/* Button to toggle profile visibility */}
          <button className='btn' onClick={this.toggleShow}>{shows ? 'Hide Profile':'Show Profile'}</button>

          <div className='time'>
          The time interval since the last component was mounted :
            <span> {timeInterval} </span> seconds
          </div>
      </div>
    )
  }
}

export default App;
