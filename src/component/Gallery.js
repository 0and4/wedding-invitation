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
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 15px;
  color: #5f4f56;
`;

const GalleryWrapper = styled.div`
  width: 80%;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  width: 100%;
`;

const Image = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 330px;
  height: 500px;
  text-align: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;

  ${({ direction }) => (direction === "left" ? "left: 20px;" : "right: 20px;")}
`;

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    require("../images/1.jpg"),
    require("../images/2.jpg"),
    require("../images/3.jpg"),
    require("../images/4.jpg"),
    require("../images/5.jpg"),
    require("../images/6.jpg"),
    require("../images/7.jpg"),
    require("../images/8.jpg"),
    require("../images/9.jpg"),
    require("../images/10.jpg"),
    require("../images/11.jpg"),
    require("../images/12.jpg"),
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = (event) => {
    event.stopPropagation(); // 모달 외부 클릭 시 닫히지 않게 추가!
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Wrapper>
      <Container>
        <Title>Wedding Gallery</Title>
        <Subtitle>우리의 순간들</Subtitle>
        <GalleryWrapper>
          <GalleryGrid>
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Gallery Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </GalleryGrid>
        </GalleryWrapper>

        {selectedImageIndex !== null && (
          <ModalOverlay>
            <ModalContent>
              <ArrowButton direction="left" onClick={handlePrev}>
                &#8249;
              </ArrowButton>
              <ModalImage
                src={images[selectedImageIndex]}
                alt={`Selected Image`}
              />
              <ArrowButton direction="right" onClick={handleNext}>
                &#8250;
              </ArrowButton>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </Wrapper>
  );
};

export default Gallery;
