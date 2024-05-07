import React from "react";
import "./Footer.scss";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="footer__top">
          <ul>
            <li>
              <img src={Logo} alt="logo" />
            </li>
            <li>
              Lorem Ipsum is simply dummy text of <br />
              the printing and typesetting industry. <br /> Lorem Ipsum has been
              the industry's <br /> standard dummy text ever.Since the <br />
              1500s, when an unknown printer.
            </li>
          </ul>
          <ul>
            <li className="footer__title">Follow Us</li>
            <li>
              Since the 1500s, when an <br />
              unknown printer took a galley of <br /> type and scrambled.
            </li>
          </ul>
          <ul>
            <li className="footer__title">Contact Us</li>
            <li>
              E-Comm , 4578 <br /> Marmora Road, <br />
              Glasgow D04 89GR
            </li>
          </ul>
        </ul>
        <ul className="footer__bottom">
          <ul>
            <li className="footer__title">Infomation</li>
            <li>
              About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions
            </li>
          </ul>
          <ul>
            <li className="footer__title">Service</li>
            <li>
              About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions
            </li>
          </ul>
          <ul>
            <li className="footer__title">My Account</li>
            <li>
              About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions
            </li>
          </ul>
          <ul>
            <li className="footer__title">Our Offers</li>
            <li>
              About Us <br />
              Infomation <br />
              Privacy Policy <br />
              Terms & Conditions
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
