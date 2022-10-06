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
        <div className="col-6">
          <h1 className="main__title">Claim the offer</h1>
          <p className="main__text">
            To claim, simply fill in your email below and follow the instructions that appear.
          </p>
          <DotsIcon />
          <MultiloginBlack />
        </div>
        <div className="slider__wrapper col-6">
          <Slider />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
