import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const CheckOutPage = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <Card className='w-50 container mt-5'>
      <Card.Img variant="top" src={courses.img} />
      <Card.Body>
        <Card.Title>{courses.name}</Card.Title>
        <Card.Text>
          {courses.introduction}
        </Card.Text>
      </Card.Body>
    </Card>
    );
};

export default CheckOutPage;