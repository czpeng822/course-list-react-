import './Output.css';
import CourseItem from './CourseItem.js';
import React, { useState,useEffect } from 'react';


function Output({ onAddCourse,courseList, setCourseList}) {
 
//check wheather hide the clear button and line.
  const [LineVisible, setLineVisible] = useState(true);
  const [BtnVisible, setBtnVisible] = useState(true);
  
  useEffect(() => {               
    function checkUI() {
      setBtnVisible(courseList.length > 0);
      setLineVisible(courseList.length > 0);
    }
    checkUI();
  }, [courseList])

  
  function ClearCourseList(){
    const confirmed = window.confirm('Are you sure?');
    if (confirmed) {
      setCourseList([]);
    }
  }

  function deleteCourse(course) { 
    const confirmed = window.confirm('Are you sure?');
    if (confirmed) {
      const updatedList = courseList.filter(item => item !== course);
      setCourseList(updatedList);
    }
  }

  function updateCourse(item,newCourse){
    const confirmed = window.confirm('Are you sure?');
    if (confirmed) {
      deleteCourse(item);
      onAddCourse(newCourse)
    }
  }

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          className="form-input-filter"
          id="filter"
          placeholder="Courses Registration:"
          style={{ display: LineVisible ? 'block' : 'none' }}
        />
      </div>

      <ul id="item-list" className="items">
        {courseList.map((course, index) => (
          <CourseItem key={index} deleteCourse={() => deleteCourse(course)}>
            {course}
          </CourseItem>
        ))}
      </ul>

      <button id="clear" className="btn-clear" style={{ display: BtnVisible ? 'block' : 'none' }} onClick={ClearCourseList}>Clear All</button>
    </div>
  );
}

export default Output;