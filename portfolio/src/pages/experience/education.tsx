import { AnimatedComponent } from "../../utils/animated";
import { useTheme } from "../../utils/themeContext";
import { eductaionData } from "./constants";
import { Heading, InnerContainer, Paragraph, Subtitle } from "./style";

const Education = () => {
  const { theme } = useTheme();
  return (
    <div>
      {eductaionData.map((education) => (
        <AnimatedComponent>
          <InnerContainer>
            <div>
              <Subtitle theme={theme}>{education.educationTitle}</Subtitle>
              <Heading theme={theme}>{education.educationHeading}</Heading>
              <Paragraph theme={theme}>{education.education}</Paragraph>
            </div>
          </InnerContainer>
        </AnimatedComponent>
      ))}
    </div>
  );
};
export default Education;
