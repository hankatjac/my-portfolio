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
                    <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Programming</h3>
                    <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Teaching</h3>
                    <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Content creation</h3>
                    <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
                <div className="mt-5">
                    <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                    <h3 className="h4 mb-2">Testing</h3>
                    <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                </div>
            </div>
        </div>
    </div>
</section>


  )
};

export default Services;
