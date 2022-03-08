import React from "react";
import styled from "styled-components";
import details from "../assets/DETAILS.png";
import { blue, fontLightColor } from "../utilities/color";

const Details = () => {
  return (
    <Section id="details" className="defaultMargin">
      <div className="square"></div>
      <div className="info">
        <div className="image">
          <img src={details} alt="" />
        </div>
        <div className="details">
          <div className="border-top">
            <p>Watch Offline</p>
            <p>Available to download</p>
          </div>
          <div className="border-top">
            <p>Genres</p>
            <ul>
              <li>Korean</li>
              <li>TV Thrillers</li>
              <li>TV Dramas</li>
            </ul>
          </div>
          <div className="border-top">
            <p>Cast</p>
            <ul>
              <li>Lee Jung-jae</li>
              <li>Park Hae-soo</li>
              <li>Wa Ha-jun</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  color: ${fontLightColor};
  margin-top: 10rem;

  .square {
    height: 9rem;
    width: 9rem;
    border: 18px solid ${blue};
    margin: 8rem 0 0 7rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    img {
      margin-bottom: 4rem;
    }
    .details {
      .border-top {
        border-top: 0.03px solid #c0c0c0;
        padding: 2rem 0;
        display: flex;
        align-items: center;
      }
      div {
        width: 60%;
        display: flex;
        gap: 10rem;
        p {
          min-width: 10rem;
        }
        ul {
          list-style-type: none;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;
    display: block;
    .info {
      gap: 0;
      img {
        width: 100%;
        margin-bottom: 2rem;
      }
      .details {
        div {
          width: 100%;
          gap: 3rem;
          p {
            min-width: 7rem;
          }
        }
      }
    }
  }
`;

export default Details;
