import * as React from "react";
import { Link } from "gatsby";

import "./_styles.scss";

import MultiLoginLogo from "../../../components/MultiLoginLogo";

const Header: React.FunctionComponent = () => (
  <div className="layoutheader">
    <div className="layoutheader__content">
      <div className="company__logo">
        <MultiLoginLogo />
      </div>
      <Link to="/" className="layoutheader__link">
        MultiLogin
      </Link>
    </div>
  </div>
);

export default Header;
