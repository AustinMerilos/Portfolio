import React, { useState } from "react";
import { EmailContainer, EmailInnerContainer, SubTitle, Title } from "./styles";

function EmailSection() {
  return (
    <EmailContainer>
      <EmailInnerContainer>
        <Title>Work History</Title>
        <SubTitle>Wrk history and education</SubTitle>
      </EmailInnerContainer>
    </EmailContainer>
  );
}

export default EmailSection;
