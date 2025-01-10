import styled from "styled-components";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Wrapper = styled.div`
  padding: 30px;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  margin: 20px 0;
`;
const AccountSection = styled.div`
  margin: 0;
  cursor: pointer;
  padding: 12px 18px;
  background-color: #fafafa;
  border: 1px solid #ccc;
  width: 310px;
  text-align: left;
  font-size: 18px;
  color: #5f4f56;
  font-weight: 600;
  border-radius: ${({ $isOpen }) => ($isOpen ? "8px 8px 0 0" : "8px")};
  display: flex; /* flexbox 사용 */
  justify-content: space-between; /* 화살표 오른쪽 정렬 */
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #eaeaea;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

const AccountDetails = styled.div`
  box-sizing: border-box;
  background-color: #fafafa;
  border:1px solid #ccc;
  width: 100%;
  display: ${({ $show }) => ($show ? "block" : "none")};
  ul {
    text-align: left;
    padding-left: 30px;
    margin: 0; /* ul의 기본 여백 제거 */
  }
  li {
    margin: 8px 0;

  /* 내부 내용을 감싸는 div 추가 */
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CopyButton = styled.button`
  background-color: #fafafa;
  color: #525252;
  border: none;
  padding: 3px 5px;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  float: right;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ccc;
  }
  &:active {
    background-color: #ccc;
  }
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
function Account() {
  const [showGroomAccounts, setShowGroomAccounts] = useState(false);
  const [showBrideAccounts, setShowBrideAccounts] = useState(false);

  const toggleGroomAccounts = () => {
    setShowGroomAccounts((prev) => !prev);
    setShowBrideAccounts(false); // 신랑측 계좌를 열면 신부측 계좌는 닫기
  };

  const toggleBrideAccounts = () => {
    setShowBrideAccounts((prev) => !prev);
    setShowGroomAccounts(false); // 신부측 계좌를 열면 신랑측 계좌는 닫기
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("계좌번호가 복사되었습니다!");
      },
      (err) => {
        alert("복사 실패: " + err);
      }
    );
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Account</Title>
          <SubTitle>마음 전하실 곳</SubTitle>
          <Context>
            참석이 어려우신 분들을 위해 <br></br>계좌번호를 기재하였습니다.
          </Context>
          <Context>너그러운 마음으로 양해 부탁드립니다.</Context>
          <div style={{ margin: 0 }}>
            <AccountSection
              onClick={toggleGroomAccounts}
              $isOpen={showGroomAccounts}
            >
              신랑측 계좌번호{" "}
              {showGroomAccounts ? <FaChevronUp /> : <FaChevronDown />}
            </AccountSection>
            <AccountDetails $show={showGroomAccounts}>
              <ul>
                <li>
                  손현우 | 우리은행 100-000-1000
                  <CopyButton
                    onClick={() => copyToClipboard("손현우 우리 100-000-1000")}
                  >
                    복사
                  </CopyButton>
                </li>
                <li>
                  손00 (부) | 신한은행 110-100-0000
                  <CopyButton
                    onClick={() => copyToClipboard("손00 신한 110-100-0000")}
                  >
                    복사
                  </CopyButton>
                </li>
                <li>
                  이00 (모) | 신한은행 100-000-0000
                  <CopyButton
                    onClick={() => copyToClipboard("이00 농협 100-000-0000")}
                  >
                    복사
                  </CopyButton>
                </li>
              </ul>
            </AccountDetails>
          </div>

          <div style={{ margin: 0 }}>
            <AccountSection
              onClick={toggleBrideAccounts}
              $isOpen={showBrideAccounts}
            >
              신부측 계좌번호{" "}
              {showBrideAccounts ? <FaChevronUp /> : <FaChevronDown />}
            </AccountSection>
            <AccountDetails $show={showBrideAccounts}>
              <ul>
                <li>
                  박세희 | 농협은행 356-100-0000
                  <CopyButton
                    onClick={() => copyToClipboard("박세희 농협 356-100-0000")}
                  >
                    복사
                  </CopyButton>
                </li>
                <li>
                  박00 (부) | 신한은행 100-100-0000
                  <CopyButton
                    onClick={() => copyToClipboard("박00 신한 100-100-0000")}
                  >
                    복사
                  </CopyButton>
                </li>
                <li>
                  김00 (모) | 하나은행 120-0000-000
                  <CopyButton
                    onClick={() => copyToClipboard("김00 하나 120-0000-000")}
                  >
                    복사
                  </CopyButton>
                </li>
              </ul>
            </AccountDetails>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
export default Account;
