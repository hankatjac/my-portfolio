import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Front-End</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              ReactJS, Context API, Redux, TanStack Query,HTML, CSS, SCSS,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </p>
            <h2 className="text-white mt-0">Back-End</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              NodeJS, REST API , ExpressJS, MySQL, MongoDB, Sanity, Strapi,
              Cloudinary
            </p>
            <h2 className="text-white mt-0">Languages</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              JavaScript, Java, C#, TypeScript, HTML, CSS
            </p>
            <Link className="btn btn-light btn-xl" to="/services">
              Get Started!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
