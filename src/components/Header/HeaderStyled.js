import styled from "styled-components";

export const Body = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Segoe UI;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    height: 40vh;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 40vw;
  align-items: center;
  @media screen and (min-device-width: 300px) and (max-device-width: 675px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ListHeader = styled.li`
  color: #838383;
  padding-bottom: 8px;
  :hover {
    color: black;
    border-bottom: 2px solid #f18c15;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonOff = styled.button`
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid black;
  color: black;
  padding: 0;
  :hover {
    color: #f18c15;
    border-bottom: 2px solid #f18c15;
  }
`;

export const DetailsUser = styled.div`
  padding: 5px;
  margin: 0;
  text-align: end;
  align-items: center;
`;

export const NameUser = styled.h4`
  margin: 0;
`;
