import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div>
            <div>
            <h2>this page is no route</h2>
            <h5>Please go to the <Link to='/'>home page</Link></h5>
        </div>
        <div className='error'>
        <section className="flex">
            <div className="container ">
                <div className="max-w-md text-center">
                    
                        <h2>Error <span className='oranged'>404</span></h2>
                    
                    <h3>Sorry, we couldn't find this page.</h3>
                    <p>But dont worry, you can find other things on our homepage.</p>
                </div>
            </div>
        </section>
    </div>
        </div>
    );
};

export default PageNotFound;