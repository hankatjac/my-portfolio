import React from "react";

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mt-2 text-center">
                        <a className="portfolio-box" href='https://www.exel-tech.com' target="_blank" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/1.png')} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">ompany Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2 text-center">
                        <a className="portfolio-box" href="https://hankatjac.github.io/strapi-cloudinary-store-client" target="_blank" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/8.png')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Ecommerce Website</div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="col-lg-4 col-sm-6 mt-2 text-center">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" target="_blank" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/3.jpg')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Dashboard Visualizer</div>
                            </div>
                        </a>
                    </div> */}
                    <div className="col-lg-4 col-sm-6 mt-2 text-center">
                        <a className="portfolio-box" href="https://hankatjac.github.io/will-pgm-school" target="_blank" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/7.png')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Task Management</div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" target="_blank" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/5.jpg')}  alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Social Media Website</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6 mt-2">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" target="_blank" title="Project Name">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/6.jpg')}  alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Spotify Clone</div>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default Portfolio;
