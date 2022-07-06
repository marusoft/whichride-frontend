import React from "react";
import Money from "../assests/images/money.png";
import SaveMoney from "../assests/images/savemoney.png";
import Choice from "../assests/images/choice.png";
import Safety from "../assests/images/safety.png";
import {
  BenefitWrapper,
  BenefitContainer,
  BenefitLeft,
  BenefitRight,
  ChoiceTitle,
  ChoiceDesc,
  BenefitContent,
  BenefitImage,
} from "./styles/Benefit.styled";

const Benefit = () => {
  return (
    <BenefitWrapper>
      <h1>Why Whichride</h1>

      <BenefitContainer>
        <BenefitLeft>
          <BenefitContent>
            <BenefitImage src={Money} alt="money sign" />
            <ChoiceTitle>More choices</ChoiceTitle>
            <ChoiceDesc>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </ChoiceDesc>
          </BenefitContent>
          <BenefitContent>
            <BenefitImage src={SaveMoney} alt="money sign" />
            <ChoiceTitle>More choices</ChoiceTitle>
            <ChoiceDesc>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </ChoiceDesc>
          </BenefitContent>
        </BenefitLeft>
        <BenefitRight>
          <BenefitContent>
            <BenefitImage
              background="#6FCF97"
              borderRadius="50%"
              padding="9px"
              width="64px"
              height="64px"
              src={Choice}
              alt="money sign"
            />
            <ChoiceTitle>More choices</ChoiceTitle>
            <ChoiceDesc>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </ChoiceDesc>
          </BenefitContent>
          <BenefitContent>
            <BenefitImage
              background="#BB6BD9"
              borderRadius="50%"
              padding="9px"
              width="64px"
              height="64px"
              src={Safety}
              alt="money sign"
            />
            <ChoiceTitle>More choices</ChoiceTitle>
            <ChoiceDesc>
              WhichRide lets you compare pricing across the major rideshares so
              you can save money on every ride.
            </ChoiceDesc>
          </BenefitContent>
        </BenefitRight>
      </BenefitContainer>
    </BenefitWrapper>
  );
};

export default Benefit;
