import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Card/Cards';
import Catagories from '../Catagories/Catagories';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='container mt-5'>
            <Row>

                <Col lg={10}>
                    <h1 className='mb-2 text-center h3-color'>Courses</h1>

                    <div className='card-container'>
                        <div className='single-card'>
                            {
                                courses.map(course => <Cards key={course.id} course={course}></Cards>)
                            }
                        </div>
                    </div>

                </Col>
                <Col lg={2}>
                    <h3 className='text-center pb-5 '>All Courses</h3>
                    <div >
                        {
                            courses.map(course => <Catagories key={course.id} course={course}></Catagories>)
                        }
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default Courses;