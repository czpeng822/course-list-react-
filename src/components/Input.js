import './Input.css';
import React, { useState } from 'react';
import Output from './Output.js'

function Input({ onAddCourse, courseList}){
  const [newCourse, setNewCourse] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [olditem, setolditem] = useState('');

  function InputValue(event) {
    setNewCourse(event.target.value);
  }

  function AddCourse(event) {
    event.preventDefault();
    if (newCourse === '') {
      alert('Please enter a course ID !');
      return;
    }
    if(courseList.includes(newCourse)) {
      alert('Course already exists!');
      return;
    }

    onAddCourse(newCourse);
    setNewCourse('');
  }


  



  
  return (
    <form id="item-form" onSubmit={AddCourse}>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          id="item-input"
          name="item"
          placeholder="Please Enter Course ID"
          value={newCourse}
          onChange={InputValue}
        />
      </div>
      <div className="form-control">
        <button type="submit" className="btn" style={{ backgroundColor: isEditMode ? '#228B22' : '' }}>
          <i className="fa-solid fa-plus" ></i>{isEditMode ? 'Update Item' : 'Add Course'}
        </button>
      </div>
    </form>
  );
}

export default Input;