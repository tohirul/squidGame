import React from "react";
import styled from "styled-components";
import { fontLightColor } from "../utilities/color";

const Footer = () => {
  return (
    <Section className="defaultMargin">
      <ul>
        <li>
          <a href="##">FAQ</a>
        </li>
        <li>
          <a href="##">HELP CENTER</a>
        </li>
        <li>
          <a href="##">ACCOUNT</a>
        </li>
        <li>
          <a href="##">MEDIA CENTRE</a>
        </li>
        <li>
          <a href="##">INVESTOR RELATIONS</a>
        </li>
        <li>
          <a href="##">JOBS</a>
        </li>
        <li>
          <a href="##">WAYS TO WATCH</a>
        </li>
        <li>
          <a href="##">TERMS OF USE</a>
        </li>
        <li>
          <a href="##">PRIVACY</a>
        </li>
        <li>
          <a href="##">COOKIE PREFERENCES</a>
        </li>
        <li>
          <a href="##">CORPORATE INFORMATION</a>
        </li>
        <li>
          <a href="##">CONTACT US</a>
        </li>
        <li>
          <a href="##">SPEED TEST</a>
        </li>
        <li>
          <a href="##">LEGAL NOTICES</a>
        </li>
        <li>
          <a href="$#">ONLY ON NETFLIX</a>
        </li>
        <br />
      </ul>
    </Section>
  );
};

const Section = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2x solid ${fontLightColor};
  margin: 0 5rem;
  padding-top: 5rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 18rem;
    row-gap: 3rem;
    list-style-type: none;
    li {
      a {
        text-transform: uppercase;
        color: ${fontLightColor};
        text-decoration: none;
        transition: 0.3 ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    ul {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
`;

export default Footer;
