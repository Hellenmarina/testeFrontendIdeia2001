import React, { useState } from "react";
import Offline from "../Offline/Offline";
import Main from "../Main/Main";

import {
  Body,
  Nav,
  User,
  ButtonOff,
  DetailsUser,
  NameUser,
  ListHeader,
} from "./HeaderStyled";

const Header = () => {
  const [changePage, setChangePage] = useState(0);

  if (changePage === 1) {
    return <Offline />;
  }

  const off = () => {
    setChangePage(1);
  };

  return (
    <div>
      <Body>
        <img src="/img/logo.png" />
        <Nav>
          <ListHeader>Home</ListHeader>
          <ListHeader>Eventos</ListHeader>
          <ListHeader>Usuários</ListHeader>
          <ListHeader>Relatórios</ListHeader>
        </Nav>
        <User>
          <img src="/img/user.png" />
          <DetailsUser>
            <NameUser>Igor gonçalves</NameUser>
            <ButtonOff onClick={off}>Desconectar</ButtonOff>
          </DetailsUser>
        </User>
      </Body>
      <Main />
    </div>
  );
};

export default Header;
