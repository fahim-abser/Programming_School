import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './LanguageDetails.css'
const LanguageDetails = () => {
    const data = useLoaderData();
    const { img, name, details, timeRequired } = data;
    console.log(data)
    return (
        <div className='leftside'>
            <Card className='w-50'>
                <Card.Img className='image' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text'>
                        {details}
                        <p className='text-dark fw-bold'>TimeRequired:{timeRequired}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LanguageDetails;