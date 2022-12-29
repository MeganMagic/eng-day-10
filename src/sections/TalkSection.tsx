import React from "react";
import styled from "styled-components";
import ClapEmoji from "../assets/emoji-clap.png";
import speakerImg1 from "../assets/talk-section-speaker-1.png";
import speakerImg2 from "../assets/talk-section-speaker-2.png";
import speakerImg3 from "../assets/talk-section-speaker-3.png";
import speakerImg4 from "../assets/talk-section-speaker-4.png";

const TALKS_DATA = [
  {
    title: <>발표 제목입니다</>,
    speaker: "발표자1",
    interviewUrl: "https://codestates.com",
    imgSrc: speakerImg1
  },
  {
    title: <>발표 제목입니다</>,
    speaker: "발표자2",
    interviewUrl: "https://codestates.com",
    imgSrc: speakerImg2
  },
  {
    title: <>발표 제목입니다</>,
    speaker: "발표자3",
    interviewUrl: "https://codestates.com",
    imgSrc: speakerImg3
  },
  {
    title: <>발표 제목입니다</>,
    speaker: "발표자4",
    interviewUrl: "https://codestates.com",
    imgSrc: speakerImg4
  }
]


const TalkSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0 180px;
  
  .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    
    .emoji-box {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      background: #191919;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
      
      img {
        width: 60px;
      }
    }
    
    > h2 {
      font-weight: 900;
      font-size: 48px;
      line-height: 64px;
      letter-spacing: -0.04em;
    }
  }
  
  .talk-list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    
    .talk-list-item {
      display: grid;
      grid-template-columns: 365px 275px;
      grid-template-rows: 320px;
      border-radius: 20px;
      
      .text-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #191919;
        padding: 40px 0 40px 40px;
        border-radius: 20px 0 0 20px;
        
        .talk-texts {
          > h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: -0.04em;
            margin-bottom: 11px;
          }
          
          > p {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
          }
        }
        
        .button-box {
          button {
            padding: 6px 28px;
            background: #191919;
            border: 1px solid #373737;
            border-radius: 50px;
            font-weight: 700;
            font-size: 14px;
            line-height: 36px;
            letter-spacing: -0.04em;
            color: #FFFFFF;
            cursor: pointer;
          }
        }
      }
      
      .img-container {
        width: 100%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
  }
`


const TalkSection: React.FC = () => {
  return (
    <TalkSectionWrapper>
      <div className="title-box">
        <div className="emoji-box">
          <img src={ClapEmoji} alt="박수치는 이모지"/>
        </div>
        <h2 className="section-title">발표 세션 소개</h2>
      </div>
      <ul className="talk-list">
        {TALKS_DATA.map(talk => (
          <li className="talk-list-item">
            <div className="text-box">
              <div className="talk-texts">
                <h3>{talk.title}</h3>
                <p>{talk.speaker}</p>
              </div>
              <div className="button-box">
                <button onClick={() => {
                  window.open(talk.interviewUrl)
                }}>사전 인터뷰 보기</button>
              </div>
            </div>
            <div className="img-container">
              <img src={talk.imgSrc} alt={`${talk.title} 발표 관련 이미지`}/>
            </div>
          </li>
        ))}
      </ul>
    </TalkSectionWrapper>
  );
};

export default TalkSection;