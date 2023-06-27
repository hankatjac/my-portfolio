import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (

            // -- Masthead--
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">A software developer with a passion for learning and creating.</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">freelancer providing services for programming and web contents</p>
                        <Link className="btn btn-primary btn-xl" to="/about">Join me and let's get cracking</Link>
                    </div>
                </div>
            </div>
        </header>

    )
};

export default Home;
