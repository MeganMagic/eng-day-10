import styled from "styled-components";
// TODO: 손하트 이모지로 변경
import CalendarEmoji from "../assets/emoji-calendar.png";
import CommitteeDonghoonProfile from "../assets/committee-section-donghoon.png";
import CommitteeJunghoProfile from "../assets/committee-section-jungho.png";
import CommitteeTaeyoungProfile from "../assets/committee-section-taeyoung.png";
import CommitteeJinkyoungProfile from "../assets/committee-section-jinkyoung.png";
import CommitteeJinseokProfile from "../assets/committee-section-jinseok.png";

const CommitteeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 0;
  
  .title-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    .emoji-box {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      background: #191919;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      img {
        width: 40px;
      }
    }

    > h2 {
      font-weight: 900;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.04em;
      margin-bottom: 10px;
    }
    
    > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.04em;
    }
  }
  
  .section-content {
    .committee-list {
      display: grid;
      grid-template-rows: 148px 148px;
      grid-template-columns: 120px 120px;
      row-gap: 16px;
      column-gap: 16px;
      margin-bottom: 40px;
      
      .committee-list-item {
        img {
          width: 120px;
          margin-bottom: 10px;
        }
        p {
          font-weight: 700;
          font-size: 18px;
          line-height: 18px;
          letter-spacing: -0.04em;
        }
      }
    }
    
    .honorary-member {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      span {
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.04em;
        margin-bottom: 16px;
      }
      img {
        width: 120px;
        margin-bottom: 10px;
      }
      p {
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.04em;
      }
    }
  }

  ${({theme}) => theme.breakpoint.tablet} {
    padding: 120px 0 180px;

    .title-box {
      margin-bottom: 80px;

      .emoji-box {
        width: 120px;
        height: 120px;
        border-radius: 60px;
        margin-bottom: 16px;

        img {
          width: 60px;
        }
      }

      > h2 {
        font-weight: 900;
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 16px;
      }

      > p {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.04em;
      }
    }

    .section-content {
      .committee-list {
        grid-template-rows: 148px;
        grid-template-columns: 120px 120px 120px 120px;
        column-gap: 24px;
        margin-bottom: 60px;
      }

      .honorary-member {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          font-size: 24px;
          margin-bottom: 32px;
        }
      }
    }
  }
`;

const COMMITTEE_DATA = [
  {
    name: "김동훈",
    imgSrc: CommitteeDonghoonProfile
  },
  {
    name: "최정호",
    imgSrc: CommitteeJunghoProfile
  },
  {
    name: "박태영",
    imgSrc: CommitteeTaeyoungProfile
  },
  {
    name: "송진경",
    imgSrc: CommitteeJinkyoungProfile
  },
]

const CommitteeSection = () => {
  return <CommitteeSectionWrapper>
    <div className="title-box">
      <div className="emoji-box">
        <img src={CalendarEmoji} alt="손하트 이모지"/>
      </div>
      <h2 className="section-title">준비한 사람들</h2>
    </div>
    <div className="section-content">
      <ul className="committee-list">{
        COMMITTEE_DATA.map(committee => <li className="committee-list-item">
            <img src={committee.imgSrc} alt={`${committee.name}의 프로필 사진`}/>
            <p>{committee.name}</p>
          </li>
        )}
      </ul>
      <div className="honorary-member">
        <span>and...</span>
        <img src={CommitteeJinseokProfile} alt="정진석의 프로필 사진"/>
        <p className="honorary-member-name">정진석</p>
      </div>
    </div>
  </CommitteeSectionWrapper>
};

export default CommitteeSection;
