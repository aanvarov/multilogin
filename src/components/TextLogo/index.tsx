import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const MultiloginTextLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "multiloginTextLogo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return (
    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="multilogin-text-logo" />
  );
};

export default MultiloginTextLogo;
