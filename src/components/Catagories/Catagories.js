import React from 'react';
import { Link } from 'react-router-dom';
import './Catagories.css'

const Catagories = ({course}) => {
    const {name}=course;
    return (
        <div className=' text-center pt-3'>
            <Link className='course-color'  to={`/courses/${course.id}`}>{name}</Link>
        </div>
    );
};

export default Catagories;