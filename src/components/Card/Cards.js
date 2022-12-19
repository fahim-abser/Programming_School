import React from 'react';
import { createContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Card.css'

export const contex = createContext()
const Cards = ({ course }) => {
    const { name, img, details } = course;
    // console.log(course)
    return (
        <contex.Provider value={name}>
            <Row className='Newcard'>
                <Col className='mt-5'>
                    <Card>
                        <Card.Img className='image' variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text className='text'>
                                {details.slice(0, 81)}...
                            </Card.Text>
                        </Card.Body>
                        <div>
                            <button className='btn btn-secondary '><Link to={`/courses/checkOut/${course.id}`} className=' link-decoration'>Get Premium Access</Link></button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </contex.Provider>
    );
};

export default Cards;