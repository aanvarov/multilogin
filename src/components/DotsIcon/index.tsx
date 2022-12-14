import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const DotsIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dotsIcon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="dots-icon" />;
};

export default DotsIcon;
