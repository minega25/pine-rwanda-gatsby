import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image3 from '../../static/img/3.jpg'

const SlideImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image3});
  height: 50rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const HeroText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
`;

const Para = styled.p`
  font-size: 1.5rem;
`;

export default class HeroCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay interval={2000} infiniteLoop emulateTouch>
        <div>
          <SlideImage>
            <HeroText>
              <Para>
                We provide Risk management and competitive strategy
                solutions
              </Para>
              <H1>
                BRIDGE THE GAP
              </H1>
            </HeroText>
          </SlideImage>
        </div>
        <div>
          <SlideImage>
            <HeroText>
              <Para>
                Our cross-functional project teams are best in the business.
              </Para>
              <H1>
                ACROSS ALL MAJOR INDUSTRIES
              </H1>
            </HeroText>
          </SlideImage>
        </div>
        <div>
          <SlideImage>
            <HeroText>
              <Para>
                Whether your company is defending a first-to-market position
                or seeking to increase market share,
              </Para>
              <H1>
                UNDERSTANDING THE COMPETITIVE LANDSCAPE IS CRUCIAL.
              </H1>
            </HeroText>
          </SlideImage>
        </div>
        <div>
          <SlideImage>
            <HeroText>
              <Para>
                We leverage best-in-class research because
              </Para>
              <H1>
                RISK IS AN EVER-CHANGING ISSUE
              </H1>
            </HeroText>
          </SlideImage>
        </div>
      </Carousel>
    );
  }
}