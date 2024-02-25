import React from 'react';

function CourseItem({children,deleteCourse,updateCourse}){

    return(  
        <li>{children}
            <button className='remove-item btn-link text-red' onClick={deleteCourse}>
                    <i className='fa-solid fa-xmark'></i>
            </button>
            </li>
            
    )
}

export default CourseItem;
