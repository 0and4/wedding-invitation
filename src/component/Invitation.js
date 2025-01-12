import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./ui/Wrapper";
import callIcon from "../images/call.png";
import messageIcon from "../images/message.png";
import iconImage from "../images/greeting_icon.png";

const Container = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: #f6f2f2;
`;

const Title = styled.p`
  font-family: "Orbit", sans-serif;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #5f4f56;
`;

const Subtitle = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 15px;
  color: #5f4f56;
`;

const Paragraph = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: #5e5e5e;
  margin-bottom: 5px;
`;

const Names = styled.p`
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
  width: 90%;
  max-width: 290px;
  height: 600px;
  background: #ccc1c1;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
  padding: 20px;
`;

const GroupTitle = styled.p`
  /*신랑측, 신부측 제목 스타일링*/
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #5f4f56;
  margin-top: 50px;
`;

const ContactRole = styled.div`
  /*역할 칸 스타일링*/
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  color: #5f4f56;
  flex: 1;
`;

const ContactName = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  color: #5f4f56;
  flex: 2; /* 이름 칸 비율 */
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const ButtonGroup = styled.div`
  /* 전화, 메시지 버튼 그룹 정렬 */
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;

const IconButton = styled.a`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  img {
    width: 18px;
    height: 16px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active img {
    transform: scale(1.4); /* 클릭 시 더 커지는 효과 */
  }
`;

const Divider = styled.hr`
  /* 구분선 */
  width: 100%;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

const Backdrop = styled.div`
  /*모달 뒷배경*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(234, 234, 234, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  /* 닫기 버튼 */
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

  const handleCloseModal = (e) => {
    if (e.target.id === "backdrop") {
      setIsModalOpen(false);
    }
  };

  const contactList = [
    {
      title: "신랑측",
      contacts: [
        { role: "신랑", name: "손현우", phone: "010-1234-5678" },
        { role: "신랑 아버지", name: "손 0 0", phone: "010-2345-6789" },
        { role: "신랑 어머니", name: "이 0 0", phone: "010-3456-7890" },
      ],
    },
    {
      title: "신부측",
      contacts: [
        { role: "신부", name: "박세희", phone: "010-4567-8901" },
        { role: "신부 아버지", name: "박 0 0", phone: "010-5678-9012" },
        { role: "신부 어머니", name: "김 0 0", phone: "010-6789-0123" },
      ],
    },
  ];

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
          손00 · 이00의 장남 손현우
          <br />
          박00 · 김00의 장녀 박세희
        </Names>
        <ContactButton onClick={handleOpenModal}>연락하기</ContactButton>

        {isModalOpen && (
          <Backdrop id="backdrop" onClick={handleCloseModal}>
            <Modal>
              <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
              <Title>Contact</Title>
              <Subtitle>연락하기</Subtitle>

              {contactList.map((group, index) => (
                <div key={index}>
                  <GroupTitle>{group.title}</GroupTitle>{" "}
                  {/* h3 대신 p 태그로 표시 */}
                  <Divider /> {/* 구분선 추가 */}
                  {group.contacts.map((contact, idx) => (
                    <ContactRow key={idx}>
                      <ContactRole>{contact.role}</ContactRole>
                      <ContactName>{contact.name}</ContactName>
                      <ButtonGroup>
                        <IconButton href={`tel:${contact.phone}`}>
                          <img src={callIcon} alt="전화" />
                        </IconButton>
                        <IconButton href={`sms:${contact.phone}`}>
                          <img src={messageIcon} alt="문자" />
                        </IconButton>
                      </ButtonGroup>
                    </ContactRow>
                  ))}
                </div>
              ))}
            </Modal>
          </Backdrop>
        )}
      </Container>
    </Wrapper>
  );
};

export default Invitation;
