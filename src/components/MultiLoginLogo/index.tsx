import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const MultiLoginLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "multiloginLogo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="multilogin-logo" />;
};

export default MultiLoginLogo;
