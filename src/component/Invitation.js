import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./ui/Wrapper";
import iconImage from "../images/greeting_icon.png";

const Container = styled.div`
  width: 375px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: #f6f2f2;
`;

const Title = styled.p`
  /*invitation*/
  font-family: "Orbit", sans-serif;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #5f4f56;
`;

const Subtitle = styled.p`
  /*소중한 분들을 초대합니다*/
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 15px;
  color: #5f4f56;
`;

const Paragraph = styled.p`
  /*인삿말 내용*/
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #5e5e5e;
  margin-bottom: 5px;
`;

const Names = styled.p`
  /*장남,장녀*/
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  margin-top: 45px;
  color: #5f4f56;
`;

const ContactButton = styled.button`
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 10px 20px;
  width: 120px;
  font-size: 12px;
  font-family: "Noto Sans KR", sans-serif;
  color: #5f4f56;
  background-color: #f6f2f2;
  border: 1px solid #bbbbbb;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(232, 232, 232);
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  padding: 20px;
  background: #ccc1c1; /* 배경색 */
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(234, 234, 234, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  z-index: 1001;

  &:hover {
    color: #000;
  }
`;

const Invitation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Invitation</Title>
        <Subtitle>소중한 분들을 초대합니다</Subtitle>
        <Icon src={iconImage} alt="icon" />
        <Paragraph>
          저희 두 사람,
          <br />
          서로를 향한 믿음과 사랑으로
          <br /> 새로운 출발을 시작하려 합니다.
        </Paragraph>
        <Paragraph>
          서로에게 의지하며, 존중과 사랑 속에서 <br />
          행복한 가정을 꾸려 나가기 위해 <br />
          앞으로도 함께하겠습니다.
        </Paragraph>
        <Paragraph>
          부부로서 첫 걸음을 내딛는 순간을 <br />
          가까이에서 축복해주시면 감사하겠습니다.
        </Paragraph>
        <Paragraph>
          여러분의 따뜻한 응원과 사랑 속에서 더욱 <br />
          아름다운 날들을 만들어 가겠습니다.
        </Paragraph>
        <Names>
          000 · 000의 장남 손현우
          <br />
          000 · 000의 장녀 박세희
        </Names>
        <ContactButton onClick={handleOpenModal}>연락하기</ContactButton>

        {isModalOpen && (
          <>
            <Backdrop onClick={handleCloseModal} />
            <Modal>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              {/* 모달 내용은 이후 추가 예정 */}
            </Modal>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Invitation;
