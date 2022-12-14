import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div className="min-vh-100 container d-flex flex-column justify-content-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
