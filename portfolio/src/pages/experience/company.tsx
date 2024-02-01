import { AnimatedComponent } from "../../utils/animated";
import { useTheme } from "../../utils/themeContext";
import { companyData } from "./constants";
import { CompanyImage, InnerContainer, Paragraph, Subtitle } from "./style";

const Company = () => {
  const { theme } = useTheme();
  return (
    <>
      {companyData.map((company) => (
        <div>
          <AnimatedComponent>
            <Subtitle theme={theme}>{company.companyTitle}</Subtitle>
            <InnerContainer>
              <CompanyImage src={company.image} />
              <Paragraph theme={theme}>{company.company}</Paragraph>
            </InnerContainer>
          </AnimatedComponent>
        </div>
      ))}
    </>
  );
};
export default Company;
