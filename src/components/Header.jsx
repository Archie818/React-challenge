import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import { Button } from 'antd';

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />      
        <Button type="primary">
          <Link to="/male">Male</Link>
        </Button>
        
        <Button type="primary">
        <Link to="/female">Female</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;