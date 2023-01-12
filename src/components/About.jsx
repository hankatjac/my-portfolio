import React from "react";

const About = () => {
  return (

    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Front-End</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM, Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
            <h2 className="text-white mt-0">Back-End</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL</p>
            <h2 className="text-white mt-0">Languages</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">JavaScript, Java, Python, C#, C, C++, TypeScript, Go</p>
            <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
