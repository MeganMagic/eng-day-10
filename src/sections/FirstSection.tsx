import React from "react";
import styled from "styled-components";
import Interaction from "../components/Interaction";

const FirstSectionWrapper = styled.div``;

const FirstSection: React.FC = () => {
  return (
    <FirstSectionWrapper>
      <Interaction />
    </FirstSectionWrapper>
  );
};

export default FirstSection;
