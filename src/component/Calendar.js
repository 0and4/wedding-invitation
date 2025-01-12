import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Wrapper } from "./ui/Wrapper";

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

const Divider = styled.hr`
  width: 90%;
  border: none;
  border-top: 1px solid rgb(184, 184, 184);
  margin-top: 20px;
  margin-bottom: 60px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7열 */
  gap: 3px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`;

const Day = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  color: ${(props) => (props.isWeekend ? "#d9534f" : "#5f4f56")};
`;

const DateCell = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  color: ${(props) =>
    props.isToday ? "#ffffff" : props.isSunday ? "#d9534f" : "#5f4f56"};
  background-color: ${(props) => (props.isToday ? "#E5ABA9" : "transparent")};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 13px;
`;

const Countdown = styled.div`
  font-family: "Orbit", sans-serif;
  font-size: 25px;
  color: #5f4f56;
  margin-top: 60px;
`;

const Message = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  color: #5f4f56;
  margin-bottom: 30px;
`;

const Calendar = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [daysLeft, setDaysLeft] = useState("");

  // 결혼식 날짜
  const weddingDate = new Date("2025-03-22T10:00:00");

  // 남은 시간 계산
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setDaysLeft(days); // 남은 일수 저장
      setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
    } else {
      setDaysLeft(0); // 남은 일수 0 설정
      setTimeLeft("오늘 결혼식입니다!");
    }
  };

  // 타이머 업데이트
  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(), 1000);
    return () => clearInterval(timer);
  }, []);

  // 요일과 날짜 생성
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  // 3월 달력: 1일이 토요일부터 시작
  const marchOffset = 6; // 1일이 토요일 (6칸 공백)

  return (
    <Wrapper>
      <Container>
        <Title>2025 . 03 . 22</Title>
        <Subtitle>토요일 오전 10시</Subtitle>
        <Divider />
        <CalendarGrid>
          {daysOfWeek.map((day, index) => (
            <Day key={index} isWeekend={day === "일" || day === "토"}>
              {day}
            </Day>
          ))}
          {/* 공백 채우기 */}
          {Array.from({ length: marchOffset }).map((_, index) => (
            <div key={`empty-${index}`}></div>
          ))}
          {/* 날짜 렌더링 */}
          {dates.map((date) => {
            const dayOfWeek = (marchOffset + date - 1) % 7; // 요일 계산
            return (
              <DateCell
                key={date}
                isToday={date === 22}
                isSunday={dayOfWeek === 0} // 일요일 확인
              >
                {date}
              </DateCell>
            );
          })}
        </CalendarGrid>
        <Countdown>{timeLeft}</Countdown>
        <Message>현우, 세희의 결혼식이 {daysLeft}일 남았습니다</Message>
      </Container>
    </Wrapper>
  );
};

export default Calendar;
