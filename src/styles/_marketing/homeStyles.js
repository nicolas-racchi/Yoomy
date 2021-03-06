import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Hero section

export const Row = styled.div`
  display: block;
  position: relative;
  margin-top: 60px;
  z-index: 2;

  ${(props) =>
    props.flex &&
    css`
      display: flex;

      @media (max-width: 850px) {
        display: block;
      }
    `}
`;

export const HomeRow = styled.div`
  display: block;
  position: relative;
  margin-top: 70px;
  height: 500px;
  z-index: 2;

  ${(props) =>
    props.flex &&
    css`
      display: flex;

      @media (max-width: 850px) {
        display: block;
      }
    `}

  @media (max-width: 1215px) {
    height: 400px;
  }

  @media (max-width: 1000px) {
    height: 350px;
  }

  @media (max-width: 830px) {
    height: auto;
    margin-bottom: 70px;
  }
`;

export const HeroCol1 = styled.div`
  width: 80%;
  z-index: 10;

  @media (max-width: 750px) {
    margin-left: 0;
  }

  .under-hero {
    left: 0;
    margin-top: 20px;

    .bullet {
      margin-top: 10px;
      display: flex;
      align-items: center;

      p {
        margin: 0;
        margin-left: 8px;
        color: ${(props) => props.theme.text};
        opacity: 0.7;
      }
    }
  }

  h1 {
    width: 65%;
    font-size: 3rem;
    opacity: 0.95;
    margin-bottom: 20px;
    color: ${(props) => props.theme.text};

    span {
      font-weight: 600;
      color: ${(props) => props.theme.primary};
    }

    @media (max-width: 1000px) {
      width: 75%;
      font-size: 2.8rem;
    }

    @media (max-width: 800px) {
      font-size: 2.6rem;
      width: 85%;
    }

    @media (max-width: 650px) {
      width: 100%;
      font-size: 2.5rem;
    }

    @media (max-width: 450px) {
      font-size: 2rem;
    }


  button {
    background-color: ${(props) => props.theme.buttons};
    color: black;
    border: none;
    margin-top: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 1.15rem;
    font-weight: 400;
    border-radius: 20px;

    -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

    &:focus {
      outline: none;
    }
  }
  }
`;

export const HeroCol2 = styled.div`
  width: 50%;
  position: absolute;

  top: 0;
  right: 0;
  z-index: 1;
  height: 0;

  ${"" /* transform: translate(-10%, -20%); */}
  transform: translateY(-100px) translateX(-20px) scale(0.9);

  @media (max-width: 1000px) {
    transform: translateY(-50px) scale(0.9);
  }

  @media (max-width: 830px) {
    display: none;
  }

  svg {
    g {
      &.st0 {
        clip-path: url(#SVGID_2_);
      }
      path {
        &.st1 {
          fill-rule: evenodd;
          clip-rule: evenodd;
          fill: none;
          stroke: #000000;
          stroke-width: 7.1997;
          stroke-miterlimit: 2.6131;
          fill: none;
        }
      }
    }
  }
`;

// Content section

export const Content = styled(motion.div)`
  margin-bottom: 40px;
  font-family: "Montserrat";

  @media (max-width: 650px) {
    margin-left: 0;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.5rem;
    width: 85%;
    font-weight: 300;
    color: ${(props) => props.theme.text};
    letter-spacing: 1px;

    @media (max-width: 650px) {
      font-size: 1.35rem;
      width: 90%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }

  button {
    background-color: ${(props) => props.theme.secondary};
    color: black;
    border: none;
    margin-top: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 1.15rem;
    font-weight: 400;
    border-radius: 20px;

    -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

    &:focus {
      outline: none;
    }
  }
`;

// Features section

export const FeaturesSection = styled.div`
  display: flex;
  margin-left: 25px;

  @media (max-width: 900px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 50px;
    width: 90%;

    @media (max-width: 750px) {
      font-size: 1.35rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.buttons};
    color: black;
    border: none;
    margin-top: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    font-size: 1.15rem;
    font-weight: 400;
    border-radius: 20px;

    -webkit-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    -moz-box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);
    box-shadow: 5px 5px 22px -1px rgba(186, 186, 186, 0.72);

    &:focus {
      outline: none;
    }
  }
`;

export const Card = styled(motion.div)`
  width: 50%;
  color: ${(props) => props.theme.text};

  ${(props) =>
    props.text &&
    css`
      h3 {
        padding-left: 25px;
      }
    `}

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 900px) {
      display: none;
    }
    @media (max-width: 500px) {
      display: block;
      width: 100%;
    }
  }

  .ul {
    margin-top: 35px;
    padding-left: 25px;

    color: ${(props) => props.theme.text};

    .li {
      margin: 10px 0;

      p {
        font-size: 1.3rem;

        span {
          font-size: 2.5rem;
          font-weight: 900;
          color: ${(props) => props.theme.accent};
        }
      }
    }
  }
`;

// Banner section

export const Banner = styled.div`
  margin: 0;
  z-index: 1;
  position: relative;
  background-color: ${(props) => props.theme.banners};
`;

export const InnerBannerSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
  justify-content: space-evenly;
  }    
  
  div {
    &.banner-cards {
      display: flex;

      @media (max-width: 800px) {
        display: block;
      }
    }
  }

`;

export const BannerCard = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;
  color: #fff;
  margin-left: 25px;
  margin-right: 25px;
  max-width: 150px;

  span {
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 65px;
    height: 65px;
    background-color: ${(props) => props.theme.accent};
    border-radius: 100%;

    svg {
      position: absolute;
      top: 17px;
      left: 17px;
      width: 30px;
      height: 30px;

      path {
        fill: #ffffff;
      }
    }
  }
  h4 {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 12px;
    font-weight: 600;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    font-size: 0.935rem;
  }
`;

// Banner2 section

export const Banner2 = styled.div`
  height: 150px;
  background-color: ${(props) => props.theme.primaryDarker};
  color: white;
  text-align: center;

  button {
    margin-top: 52px;
  }
`;
