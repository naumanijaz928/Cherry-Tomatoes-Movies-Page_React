import logo from "../../assets/deadful_tomatoes.png";
import google from "../../assets/google-play.png";
import apple from "../../assets/app-store.png";
import "./styles.scss";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="Dreadful chery logo" />
      <div className="icons">
        <img src={google} alt="google-button" />
        <img src={apple} alt="applestore-button" />
      </div>
      <small>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</small>
    </div>
  );
};

export default Footer;
