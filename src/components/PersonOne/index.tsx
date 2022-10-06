import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const PersonOne = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "personOne.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return (
    <GatsbyImage
      style={{ width: "194px", height: "163px" }}
      image={data.file.childImageSharp.gatsbyImageData}
      alt="person-one"
    />
  );
};

export default PersonOne;
