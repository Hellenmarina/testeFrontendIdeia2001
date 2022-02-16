import React from "react";
import Modal from "../Modal/Modal";
import {
  BackgroundOne,
  BackgroundTwo,
  Footer,
  FooterTitle,
  MainDetails,
  Tittle,
  Info,
  CardInfo,
  ImgCard,
  BodyMain,
} from "../Main/MainStyled";

const Main = () => {
  return (
    <BodyMain>
      <MainDetails>
        <Tittle>
          Olá <b>Igor gonçalves,</b> Selecione uma das opções abaixo:
        </Tittle>
        <Info>
          <CardInfo>
            <Modal />
            <p>
              <b>Meus eventos</b>
            </p>
          </CardInfo>
          <CardInfo>
            <ImgCard src="/img/icone-usuarios.png" />
            <p>
              <b>Meus usuários</b>
            </p>
          </CardInfo>
          <CardInfo>
            <ImgCard src="/img/icone-relatorios.png" />
            <p>
              <b>Meus relatórios</b>
            </p>
          </CardInfo>
        </Info>
      </MainDetails>
      <BackgroundOne></BackgroundOne>
      <BackgroundTwo></BackgroundTwo>

      <Footer>
        <FooterTitle>Ideia 2001</FooterTitle>
        <p> © Copyright 2019 - Todos os direitos reservados</p>
      </Footer>
    </BodyMain>
  );
};

export default Main;
