import * as React from "react";
import { Link } from "gatsby";

import MultiLoginLogo from "../../../components/MultiLoginLogo";
import MultiloginTextLogo from "../../TextLogo";

const Header: React.FunctionComponent = () => (
  <div className="d-flex align-items-center p-3">
    <div>
      <MultiLoginLogo />
    </div>
    <Link to="https://multilogin.com/" className="mt-2 mx-3">
      <MultiloginTextLogo />
    </Link>
  </div>
);

export default Header;
