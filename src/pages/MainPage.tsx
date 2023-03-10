import React from "react";
import styled from "styled-components";
import HeroSection from "sections/HeroSection";
import OutlineSection from "../sections/OutlineSection";
import TalkSection from "../sections/TalkSection";
import NetworkingSection from "../sections/NetworkingSection";
import TimetableSection from "../sections/TimetableSection";
import CommitteeSection from "../sections/CommitteeSection";
import ArchivingSection from "../sections/ArchivingSection";
import Header from "../components/Header";
import TestSection from "../sections/TestSection";

const MainPageWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  color: ${(props) => props.theme.color.white};
`;

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <Header />
      <HeroSection />
      <OutlineSection />
      <TalkSection />
      <TestSection />
      <NetworkingSection />
      <TimetableSection />
      <CommitteeSection />
      <ArchivingSection />
    </MainPageWrapper>
  );
};

export default MainPage;
