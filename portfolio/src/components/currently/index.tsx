import React from "react";
import {
  CurrentlyContainer,
  CurrentlyContainerInnerContainer,
  Image,
  SubTitle,
  TextContainer,
  Title,
} from "./styles";
import images from "../../assets";
import { Theme } from "../../utils/themes";
import { AnimatedComponent } from "../../utils/animated";

const CurrentlySection: React.FC<{ theme: Theme }> = ({ theme }) => {
  return (
    <CurrentlyContainer theme={theme}>
      <AnimatedComponent>
        <CurrentlyContainerInnerContainer>
          <TextContainer>
            <Title>Currently working on:</Title>
            <SubTitle theme={theme}>
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </SubTitle>
            <SubTitle theme={theme}>
              Currently, I work at Shopify as a Senior Frontend Engineer
              crafting thoughtful and inclusive experiences that adhere to web
              standards for over 3 million merchants across the world.
            </SubTitle>
            <SubTitle theme={theme}>
              Before now, I was Principal Frontend Engineer at hellotax, where I
              worked on a suite of tools and services tailored towards automated
              VAT compliance for multi-channel sellers in Europe.
            </SubTitle>
            <SubTitle theme={theme}>
              Prior to hellotax, I was Senior frontend engineering consultant
              with Pixel2HTML, building JavaScript applications and interfaces
              for orgs and individuals.
            </SubTitle>
            <SubTitle theme={theme}>
              I once also led the frontend team at Conectar, an e-learning
              startup through building multiple React applications into a single
              robust learning platform.
            </SubTitle>
          </TextContainer>

          <Image src={images.desktop} theme={theme} />
        </CurrentlyContainerInnerContainer>
      </AnimatedComponent>
    </CurrentlyContainer>
  );
};

export default CurrentlySection;
