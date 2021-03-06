import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
import Animates from "../Elements/Animates/Animates";
// Assets
import HeaderImage from "../../assets/img/header-img.jpeg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";


export default function Header(props) {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <Animates animate="animate__fadeInUp" time="animate__fast" showInterest="0.3">
        <div>
          <h1 className="extraBold font60">Професійна розробка не тільки сайтів.</h1>
          <HeaderP className="font13 semiBold">
          Інтернет Магазини, Landing Page, Корпоративні, Seo, Додатки на ПК, iPhone / Android, Реклама.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Консультація" action={()=>{props.showModal()}} />
          </BtnWrapper>
        </div>
        </Animates>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
        <Animates animate="animate__fadeInDown" time="animate__fast" showInterest="0.3">
          <Img className="radius8" src={HeaderImage} width="438px"  alt="office" style={{zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>Хлопці роблять таке, що важко уявити. Розробили систему "1C" для мого шиномонтажу...</em>
                </p>
                <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>www.22duyma.com</p>
              </div>
            </QuoteWrapper>

          <DotsWrapper>
            <Dots />
          </DotsWrapper>
          </Animates>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  overflow: hidden;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding-top: 30px;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin-top: 30px;
  }
`;
const HeaderP = styled.p`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 4;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 3;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: 15px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


