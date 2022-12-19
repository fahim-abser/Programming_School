import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import './Signup.css'
const SignUp = () => {
    const { register, updateUserProfile } = useContext(authContext)
    const HandleClick = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                HandleUser(name,photoUrl)
            })
            .catch(error => {
                console.log(error)
            })

    }
    const HandleUser = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h2 className='text-center mt-5'>Please Register Your Account</h2>
            <Form onSubmit={HandleClick} className='container mt-5 p-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoUrl' placeholder=" PhotoUrl" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    <div className='link-decoration'>
                        <p className='mt-2 ms-2 '>Already have an account?<Link to='/signIn'><span className='signin-color'> Signin</span></Link></p>
                    </div>
                </Form.Group>
                <Button className='' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;