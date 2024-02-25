import React from 'react';

function CourseItem({ children, deleteCourse, updateCourseContent }) {

    function UpdateOrDelete(event) {
        if (event.target.parentNode.classList.contains('remove-item')) {
            deleteCourse();
        } else {
            updateCourseContent(children);
        }
    }

    return (
        <li onClick={UpdateOrDelete}>
            {children}
            <button className='remove-item btn-link text-red'>
                <i className='fa-solid fa-xmark'></i>
            </button>
        </li>
    );
}

export default CourseItem;
