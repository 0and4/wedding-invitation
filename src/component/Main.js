import styled from "styled-components";
import mainImg from "../images/wedding6.jpg";
import { Wrapper } from "./ui/Wrapper";
const Container = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(180deg, #ede7e7 60%, #f6f2f2 100%);
`;
const WeddingText = styled.p`
  font-family: "Alex Brush", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 125px;
  line-height: 24px;
  color: #e0908d;
  transform: translateX(-4%);
`;
const InvitationText = styled.p`
  font-family: "Sorts Mill Goudy";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  color: #808080;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.2em;

  transform: translateX(-20%);
  margin-top: -110px;
`;
const NameText = styled.p`
  margin: 0;
`;
const DateText = styled.p`
  margin: 15px;
  font-family: "Orbit", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 24px;
  color: #79445a;
`;
const TimeText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;
const PlaceText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #7c7b6f;
`;
const ScheduleContainer = styled.div`
  padding-bottom: 20px;
`;
const Image = styled.img`
  width: 140%;
  height: auto;
  transform: translateX(-15%);
`;
function Main() {
  return (
    <Wrapper>
      <Container>
        <div>
          <WeddingText>Wedding</WeddingText>
          <InvitationText>Invitation</InvitationText>
          <NameText>손현우</NameText>
          <NameText>/</NameText>
          <NameText>박세희</NameText>
          <Image alt="" src={mainImg}></Image>
          <ScheduleContainer>
            <DateText>2025/03/22</DateText>
            <TimeText>SATURDAY 10:00 AM</TimeText>
            <PlaceText>웨딩시티 신도림 7F, 아스타홀</PlaceText>
          </ScheduleContainer>
        </div>
      </Container>
    </Wrapper>
  );
}
export default Main;
