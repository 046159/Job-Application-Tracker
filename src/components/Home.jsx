import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';

function Home() {

    const backgroundStyle = {
        backgroundImage: `url('job-search.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        minHeight: '70vh',
    };

    return (
        <div style={backgroundStyle}>
            <p></p>
            <p className="lead">Use this app to track the jobs you've applied for, and what the outcome was.</p>
            <p className="lead">Click on <strong>Applications</strong> to see the jobs you've applied for, and <strong>Add Application</strong> to add a new application.</p>
        </div>



    )
}

export default Home;
