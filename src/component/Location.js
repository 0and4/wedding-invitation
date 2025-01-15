import React, { useEffect } from "react";
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

const InfoText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  margin: 2px 0;
  color: #767676;
  text-align: left;
`;

const Section = styled.div`
  width: 90%;
  margin: 10px 0; /*교통 수단 문단 간격*/
`;

const SectionTitle = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 2px;
  color: #5f4f56;
`;

const SectionText = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  color: #5f4f56;
  margin: 5px 0;
  text-align: left;
`;

const List = styled.ul`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  text-align: left;
  padding-left: 20px; /* 들여쓰기 추가 */
  margin-top: 5px;
`;

const ListItem = styled.li`
  margin: 5px 0;
  color: #5f4f56;
  list-style-type: none;
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: -15px; /* 
    color: ${(props) => (props.small ? "#767676" : "#5f4f56")};
    font-size: ${(props) => (props.small ? "10px" : "13px")};
  }
`;

const Divider = styled.hr`
  width: 90%;
  border: none;
  border-top: 1px solid #d9d9d9;
  margin: 5px 0;
`;

const BusListItem = styled.li`
  margin: 5px 0;
  color: #767676;
  list-style-type: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  text-align: left;
  display: flex;
  align-items: center;
`;

const ColorCircle = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px; /* 지도 높이 */
  margin: 20px 0;
  border-radius: 8px;
`;

const Location = () => {
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.507175, 126.890272), // 지도 중심 좌표
        level: 3, // 확대 레벨
      };

      const map = new window.kakao.maps.Map(container, options);

      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(
        37.507175,
        126.890272
      ); // 마커 위치
      const markerImageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; // 커스텀 마커 이미지 URL
      const markerImageSize = new window.kakao.maps.Size(24, 35); // 마커 이미지 크기
      const markerImage = new window.kakao.maps.MarkerImage(
        markerImageSrc,
        markerImageSize
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition, // 마커의 위치
        image: markerImage, // 커스텀 마커 이미지
      });

      // 마커를 지도에 추가
      marker.setMap(map);

      // 마커 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, "click", () => {
        // 마커 클릭 시 실행할 동작
        window.open(
          "https://map.kakao.com/link/map/웨딩시티 신도림,37.507175,126.890272",
          "_blank"
        );
      });
    } else {
      console.error("카카오 맵 API가 로드되지 않았습니다.");
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Location</Title>
        <Subtitle>오시는 길</Subtitle>
        <SectionTitle>웨딩시티 신도림 7F, 아스타홀</SectionTitle>
        <InfoText>서울 구로구 새말로 97</InfoText>
        <InfoText>Tel. 02-2111-8888</InfoText>

        {/* 카카오 지도 삽입 */}
        <MapContainer id="map" />

        {/* 지하철 정보 */}
        <Section>
          <SectionTitle>지하철</SectionTitle>
          <InfoText>1호선, 2호선 신도림역 3번 출구</InfoText>
          <InfoText as="pre">
            {"     "}- 테크노마트판매동 지하 1층과 연결
          </InfoText>
        </Section>

        <Divider />

        {/* 버스 정보 */}
        <Section>
          <SectionTitle>버스</SectionTitle>
          <SectionText>신도림역 (17-102) 하차</SectionText>
          <List>
            <BusListItem>
              <ColorCircle color="#009A50" />
              지선: 5619, 6411, 6511, 6611
            </BusListItem>
            <BusListItem>
              <ColorCircle color="#F0604A" />
              직행: 5200
            </BusListItem>
            <BusListItem>
              <ColorCircle color="#33C84C" />
              마을: 영등포09, 영등포12, 영등포13
            </BusListItem>
          </List>
          <SectionText as="pre">
            {"        "}- 하차 후 3번 출구 쪽으로 이동 후 테크노마트 판매동{" "}
            <br />
            {"          "}지하 1층 통로 이용
          </SectionText>
        </Section>

        <Divider />

        {/* 자가용 정보 */}
        <Section>
          <SectionTitle>자가용</SectionTitle>
          <List>
            {/* 네비게이션 */}
            <ListItem>
              <InfoText>네비게이션: “웨딩시티 신도림” 검색</InfoText>{" "}
              <List>
                <ListItem>
                  <InfoText>
                    주소 검색: “서울 구로구 새말로 97” 또는
                    <br />
                    “구로동 3-25” 입력
                  </InfoText>
                </ListItem>{" "}
              </List>
            </ListItem>

            {/* 주차장 안내 */}
            <ListItem>
              <InfoText>주차장 안내</InfoText>
              <List>
                <ListItem>
                  <InfoText>테크노마트 지하주차장 이용 (B3~B7)</InfoText>
                </ListItem>{" "}
                <ListItem>
                  <InfoText>주차요원의 안내를 받으세요.</InfoText>
                </ListItem>{" "}
              </List>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Location;
