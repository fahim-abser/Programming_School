import {GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
const SignIn = () => {
    const { login, googleLogin } = useContext(authContext)

    const provider = new GoogleAuthProvider();

    const [error, setError] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const HandleClick = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    };
    const HandleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    // const HandleGithub = () => {
    //     githubLogin(githubProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }
    return (
        <div>
            <h2 className='text-center mt-5'>Please Login here...</h2>
            <Form onSubmit={HandleClick} className='container w-50 mt-5 p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                    <div>
                        <p className='mt-2 text-light'>Don't have account? <Link className='text-light' to='/signUp'>Register.</Link></p>
                    </div>
                </Form.Group>
                <Button className='' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-danger'><small>{error}</small></p>
            </Form>
            <div>
                <div className='container w-50 mt-5'>
                    <Button onClick={HandleGoogle} className='mb-3 mx-5'  size="lg">
                        <FaGoogle className='me-2'></FaGoogle>Sign in with Google
                    </Button>
                    {/* <Button onClick={HandleGithub} className='mb-3 mx-5' variant="dark" size="lg">
                        <FaGithub></FaGithub>Sign in with Github
                    </Button> */}
                </div>
            </div>
        </div>
    );
};

export default SignIn;