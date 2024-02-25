import './App.css';
import Header from './components/Header.js';
import './components/Header.css';
import Input from './components/Input.js';
import './components/Input.css';
import Output from './components/Output.js';
import './components/Output.css';
import React, { useState } from 'react';

function App() {
  const [courseList, setCourseList] = useState(["MSCS3021","MSCS3025","MSCS3050","MSCS3254"]);

  const handleAddCourse = (newCourse) => {
    setCourseList([...courseList, newCourse]);
  };

  return (
    <div className="container">
      <Header/>
      <Input onAddCourse={handleAddCourse} courseList={courseList} ></Input>
      <Output setCourseList={setCourseList} courseList={courseList}></Output>
    </div>
  );
}

export default App;
