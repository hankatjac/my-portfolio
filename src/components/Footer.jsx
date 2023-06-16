import React from "react";
import {FaFacebookF, FaGoogle, FaLinkedinIn} from 'react-icons/fa'
const Footer = () => (
    // <footer className="bg-light py-5">
    // <div className="container px-4 px-lg-5">
    //    <div className="small text-center text-muted">Copyright &copy; 2022 - Company Name</div>
    // </div>
    <footer id="footer" className="bg-light py-5">
        <div className="container">
            <h3>Hang Ruan</h3>
            {/* <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p> */}
            <div className="social-links">
                {" "}
                {/* <a href="#" className="twitter">
          <i className="bx bxl-twitter"></i>
        </a>{" "} */}
                <a href="#" className="facebook">
                    {/* <i className="bx bxl-facebook"></i> */}
                    <FaFacebookF />
                </a>{" "}
                {/* <a href="#" className="instagram">
          <i className="bx bxl-instagram"></i>
        </a>{" "} */}
                <a href="#" className="google-plus">
                    {/* <i className="bx bxl-skype"></i> */}
                    <FaGoogle />
                </a>{" "}
                <a href="#" className="linkedin">
                    {/* <i className="bx bxl-linkedin"></i> */}
                    <FaLinkedinIn />
                </a>
            </div>
            <div className="copyright">
                {" "}
             
                <strong>
                    <span>Copyright &copy; {new Date().getFullYear()} </span>
                </strong>
                - Hang Ruan
            </div>
            <div className="credits">
                {" "}
                All Rights Reserved
            </div>
        </div>
    </footer>
);

export default Footer;
