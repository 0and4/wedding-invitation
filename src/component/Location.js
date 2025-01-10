import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./ui/Wrapper";

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
  font-family: "Orbit", sans-serif;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #5f4f56;
`;

const Subtitle = styled.p`
  /*오시는 길*/
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 15px;
  color: #5f4f56;
`;

const Location = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Location</Title>
        <Subtitle>오시는 길</Subtitle>
      </Container>
    </Wrapper>
  );
};

export default Location;
