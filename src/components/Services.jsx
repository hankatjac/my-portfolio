import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">I offer a wide range of services</h2>
        <hr className="divider" />
        <div className="row">
          <div className="col-md-3 col-sm-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-gem fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2 text-primary">Programming</h3>
              <p className="text-muted mb-0">
                Build fully functional programs writing clean٫ testable code and
                integrate back-end data!
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-laptop fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2 text-success">Teaching</h3>
              <p className="text-muted mb-0">
                Instruct students on introductory-through-intermediate coding
                principles and the fundamentals of JavaScript and other relevant
                technologies via lectures, live coding
                examples, and labs!{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-globe fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2 text-danger">Content Creation</h3>
              <p className="text-muted mb-0">
                developed online content, coded into HTML and integrate content
                into new or existing websites!
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-heart fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2 text-warning">Testing</h3>
              <p className="text-muted mb-0">
                Is it really good if it's not made with love?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
