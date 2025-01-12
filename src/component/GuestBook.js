import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Wrapper } from "./ui/Wrapper";
import { CiSquareRemove } from "react-icons/ci";
const textBaseStyle = css`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  color: #5f4f56;
`;
const Container = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: #f6f2f2;
  margin: 50px 0;
`;
const Title = styled.p`
  font-family: "Orbit", serif;
  color: #5f4f56;
  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  margin: 0;
`;
const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  margin: 0;
`;
const Context = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;

  color: #5f4f56;
`;
const GuestListDiv = styled.div`
  width: 295px;
  height: auto;

  background: #e0908d;
  border-radius: 20px;
`;
const GuestDiv = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  flex: 1;
`;
const NameText = styled.p`
  ${textBaseStyle};
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  margin: 0;
`;
const Message = styled.p`
  ${textBaseStyle};
  font-size: 13px;
  line-height: 18px;
  text-align: left;
  margin: 0;
`;
const RemoveButton = styled(CiSquareRemove)`
  cursor: pointer;
  font-size: 0;
  width: 30px;
  height: 30px;
  color: #5e5e5e;
  flex-shrink: 0;

  &:hover {
    color: #e0908d;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
const InputDiv = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;
const NameInput = styled.input`
  width: 275px;
  padding: 10px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border: 1px solid #5e5e5e;
  border-radius: 5px;
`;
const MsgInput = styled.input`
  width: 275px;
  padding: 10px;
  padding-bottom: 50px;
  margin-bottom: 10px;
  background: #f5f5f5;
  border: 1px solid #5e5e5e;
  border-radius: 5px;
`;
const MsgButton = styled.button`
  margin-left: auto;
  padding: 8px 24px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border: none;
    background-color: #e0908d;
    color: #fff;
    border: 1px solid #e0908d;
  }
`;
function GuestBook() {
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "김00",
      message:
        "두분 결혼 축하드려요~ 멋진 두분의 앞날을 응원하겠습니다! 행복하세요~",
    },
    {
      id: 2,
      name: "이00",
      message: "결혼 축하드립니다 형님! 행복하십쇼!",
    },
    {
      id: 3,
      name: "박00",
      message: "결혼 축하드립니다~",
    },
  ]);

  const handleRemove = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };
  return (
    <Wrapper>
      <Container>
        <Title>Guestbook</Title>
        <SubTitle>방명록</SubTitle>
        <Context>신랑 신부에게 축하의 말을 남겨주세요.</Context>
        <GuestListDiv>
          {guests.map((guest) => (
            <GuestDiv key={guest.id}>
              <MessageContainer>
                <NameText>{guest.name}</NameText>
                <Message>{guest.message}</Message>
              </MessageContainer>
              <RemoveButton onClick={() => handleRemove(guest.id)} />
            </GuestDiv>
          ))}
        </GuestListDiv>
        <InputDiv>
          <NameInput placeholder="이름"></NameInput>
          <MsgInput placeholder="내용"></MsgInput>
          <MsgButton>작성하기</MsgButton>
        </InputDiv>
      </Container>
    </Wrapper>
  );
}
export default GuestBook;
