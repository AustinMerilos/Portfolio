import { useTheme } from "../../utils/themeContext";
import { companyData } from "./constants";
import { CompanyContainer, CompanyImage, Paragraph, Subtitle } from "./style";

const Company = () => {
  const { theme } = useTheme();
  return (
    <>
      {companyData.map((company) => (
        <div>
          <Subtitle theme={theme}>{company.companyTitle}</Subtitle>
          <CompanyContainer>
            <CompanyImage src={company.image} />
            <Paragraph theme={theme}>{company.company}</Paragraph>
          </CompanyContainer>
        </div>
      ))}
    </>
  );
};
export default Company;
