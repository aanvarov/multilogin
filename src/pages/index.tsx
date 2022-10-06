import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/Layout";
import MultiloginBlack from "../components/MultiloginBlack";
import DotsIcon from "../components/DotsIcon";
import Slider from "../components/Slider";

const IndexPage = () => {
  return (
    <Layout>
      <main className="main row">
        <div className="col-lg-6 ">
          <div className="row h-100">
            <div className="col-7">
              <h1 className="main__title">Claim the offer</h1>
              <p className="main__text">
                To claim, simply fill in your email below and follow the instructions that appear.
              </p>
            </div>
            <div className="col-5 d-flex align-items-end justify-content-center position-relative h-100 pb-4">
              <div className="position-absolute dots">
                <DotsIcon />
              </div>
              <MultiloginBlack />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <Slider />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
