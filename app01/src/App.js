import React from 'react';
// import List from './day01/List';
// import Userinfo from './day01/Userinfo';
import './App.css';
import List from './day02/List';
import Clock from './day02/clock';
import Student from './day02/Student'
import Course from './day03/Course'

function App() {
  //这是day01代码
  // let msg = "hello react!"
  // let dd = [1,2,3];
  // let user = {name:'terry',photo:'xxx'};
  // return (
  //   <div className="App">
  //     <Userinfo user = {user}/>
  //    {msg}
  //    <List a='a' b={3} c={true} data={['terry','lerry','tom']}/>
  //    <List data={dd}/>
  //   </div>
  // );
  //day02
  return(
    <div className="App">
      {/* <List/> */}
      <Clock/>
      {/* <Student/> */}
      <Course/>
    </div>
  ); 
}

export default App;

