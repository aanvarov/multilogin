import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const PersonTwo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "personTwo.png" }) {
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
      alt="person-two"
    />
  );
};

export default PersonTwo;
