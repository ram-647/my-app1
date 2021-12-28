import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-bg text-center text-lg-start mt-4">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {" "}
                    Certificates
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Claims
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {" "}
                    Users
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {" "}
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">
                    {" "}
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    {" "}
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3">
          <a className="text-dark" href="#">
            © 2021 American International Group, Inc. All rights reserved.
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
