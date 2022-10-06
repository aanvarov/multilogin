import * as React from "react";
import { Link } from "gatsby";

import "./_styles.scss";

const Footer: React.FunctionComponent = () => (
  <div className="layoutfooter">
    <ul className="list-unstyled pt-4 ps-4">
      <li>
        <Link className="layoutfooter__link" to="https://multilogin.com/">
          Multilogin
        </Link>
      </li>
      <li>
        <Link className="layoutfooter__link" to="https://multilogin.com/pricing/">
          Pricing
        </Link>
      </li>
    </ul>
  </div>
);

export default Footer;
