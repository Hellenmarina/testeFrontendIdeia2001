import styled from "styled-components";

export const BackgroundOne = styled.div`
  height: 20vh;
  background: #f08910;

  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    width: 100vw;
  }
`;

export const BackgroundTwo = styled.div`
  height: 57vh;
  background: #f1f1f1;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    width: 100vw;
    min-height: 90vh;
  }
`;

export const Footer = styled.div`
  height: 8vh;
  background: #111111;
  color: #7c7c7c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    width: 100vw;
  }
`;

export const FooterTitle = styled.p`
  color: #f28d16;
  padding: 4px;
`;

export const MainDetails = styled.div`
  height: 65%;
  width: 65%;
  margin-left: 17%;
  margin-top: 40px;
  background: white;
  text-align: center;
  z-index: 1;
  position: absolute;

  @media screen and (min-device-width: 320px) and (max-device-width: 700px) {
    font-size: 18px;
    width: 70%;
    min-height: 95vh;
    padding-bottom: 5px;
  }
`;

export const Tittle = styled.p`
  margin: 50px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 125px;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
`;

export const CardInfo = styled.div`
  height: 25%;
  width: 25%;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to top,
    rgba(241, 241, 241, 255),
    rgba(255, 255, 255, 255)
  );
  transition: all 0.3s ease;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    height: 40%;
    width: 40%;
    margin-bottom: 20px;
  }
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const ImgCard = styled.img`
  width: 35%;
`;

export const BodyMain = styled.div`
  width: 100vw;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    width: 50vw;
  }
`;

export const ImgCardMod = styled.img`
  width: 100px;
  @media screen and (min-device-width: 320px) and (max-device-width: 700px) {
    width: 65px;
  }
`;
