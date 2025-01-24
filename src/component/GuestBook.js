import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Wrapper } from "./ui/Wrapper";
import { CiSquareRemove } from "react-icons/ci";
import { fetchGuests, addGuest, removeGuest } from "../api/guestbookService";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

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
  height: 460px;

  background: #e0908d;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 10px;
`;
const GuestListContent = styled.div`
  flex: 1;
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
  color: #e0908d;
  flex-shrink: 0;

  &:hover {
    color: #c77a70;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fafafa;
  color: #e0908d;
  cursor: pointer;
  font-size: 15px;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: #e0908d;
    color: white;
  }

  &:disabled {
    cursor: not-allowed;
    background: #ccc;
    color: white;
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
  background: #fafafa;
  border: 1px solid #808080;
  border-radius: 5px;
  &:focus {
    background: #f5f5f5;
    border: 1px solid #e0908d;
    outline: none;
  }
`;
const MsgInput = styled.textarea`
  width: 275px;
  padding: 10px;
  padding-bottom: 50px;
  margin-bottom: 10px;
  background: #fafafa;
  border: 1px solid #808080;
  border-radius: 5px;
  resize: none;
  ${textBaseStyle};
  &:focus {
    background: #f5f5f5;
    border: 1px solid #e0908d;
    outline: none;
  }
`;
const MsgButton = styled.button`
  margin-left: auto;
  padding: 8px 24px;
  background-color: #e0908d;
  color: #fafafa;
  border: 1px solid #e0908d;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border: none;
    background-color: #c77a70;
    color: #fff;
    border: 1px solid #e0908d;
  }
`;

function GuestBook() {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const guestsPerPage = 5;
  // Firebase에서 초기 방명록 데이터 로드
  useEffect(() => {
    const loadGuests = async () => {
      const guestList = await fetchGuests();
      setGuests(guestList);
    };
    loadGuests();
  }, []);

  // 메시지 추가
  const handleAdd = async () => {
    if (!name || !message) return alert("이름과 메시지를 입력해주세요.");
    const newGuest = { name, message };
    const savedGuest = await addGuest(newGuest);
    setGuests((prev) => [savedGuest, ...prev]);
    setName("");
    setMessage("");
  };

  // 메시지 삭제
  const handleRemove = async (id) => {
    await removeGuest(id);
    setGuests((prev) => prev.filter((guest) => guest.id !== id));
  };
  // 현재 페이지에 해당하는 방명록만 필터링
  const indexOfLastGuest = currentPage * guestsPerPage;
  const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
  const currentGuests = guests.slice(indexOfFirstGuest, indexOfLastGuest);

  // 페이지 전환 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(guests.length / guestsPerPage);
  const shouldShowPagination = guests.length > guestsPerPage;

  return (
    <Wrapper>
      <Container>
        <Title>Guestbook</Title>
        <SubTitle>방명록</SubTitle>
        <Context>신랑 신부에게 축하의 말을 남겨주세요.</Context>
        <GuestListDiv>
          <GuestListContent>
            {currentGuests.map((guest) => (
              <GuestDiv key={guest.id}>
                <MessageContainer>
                  <NameText>{guest.name}</NameText>
                  <Message>{guest.message}</Message>
                </MessageContainer>
                <RemoveButton onClick={() => handleRemove(guest.id)} />
              </GuestDiv>
            ))}
          </GuestListContent>

          {/* 페이지네이션 버튼 */}
          {shouldShowPagination && (
            <PaginationDiv>
              <PageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <GrFormPrevious />
              </PageButton>
              <PageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <GrFormNext />
              </PageButton>
            </PaginationDiv>
          )}
        </GuestListDiv>
        <InputDiv>
          <NameInput
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MsgInput
            placeholder="내용"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MsgButton onClick={handleAdd}>작성하기</MsgButton>
        </InputDiv>
      </Container>
    </Wrapper>
  );
}
export default GuestBook;
