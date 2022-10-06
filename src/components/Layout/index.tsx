import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "./_styles.scss";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
