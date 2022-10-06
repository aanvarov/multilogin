import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/Layout";
import MultiloginBlack from "../components/MultiloginBlack";
import DotsIcon from "../components/DotsIcon";
import Slider from "../components/Slider";

const IndexPage = () => {
  return (
    <Layout>
      <main className="main row py-5">
        <div className="col-xl-6 col-lg-5 col-md-12 position-relative">
          <h1 className="main__title">Claim the offer</h1>
          <p className="main__text">
            To claim, simply fill in your email below and follow the instructions that appear.
          </p>
          <div className="main__pic">
            <div className="picsWrapper">
              <div className="dots">
                <DotsIcon />
              </div>
              <MultiloginBlack />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-12 py-5 mt-5">
          <Slider />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>MultiLogin | Home Page</title>;
