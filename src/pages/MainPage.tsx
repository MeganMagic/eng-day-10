import React from "react";
import styled from "styled-components";
import FirstSection from "sections/FirstSection";
import OutlineSection from "../sections/OutlineSection";

const MainPageWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  color: ${(props) => props.theme.color.white};
`;

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <FirstSection />
      <OutlineSection />
    </MainPageWrapper>
  );
};

export default MainPage;
