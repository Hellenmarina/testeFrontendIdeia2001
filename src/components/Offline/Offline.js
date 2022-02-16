import React, { useState } from "react";
import Header from "../Header/Header";
import { MainOff, ButtonOff, InfoOff } from "./OfflineStyled";

const Offline = () => {
  const [changePage, setChangePage] = useState(1);

  if (changePage === 0) {
    return <Header />;
  }

  const off = () => {
    setChangePage(0);
  };

  return (
    <div>
      <MainOff>
        <InfoOff>
          <h1>Você não está mais conectado!</h1>
          <ButtonOff onClick={off}>Conectar novamente</ButtonOff>
        </InfoOff>
      </MainOff>
    </div>
  );
};

export default Offline;
