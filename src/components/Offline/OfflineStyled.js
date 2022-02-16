import styled from "styled-components";

export const MainOff = styled.div`
  height: 100vh;
  background: #f08910;
  color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonOff = styled.button`
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid white;
  color: white;
  padding: 0;
  :hover {
    color: #f1f1f1;
    border-bottom: 2px solid #f1f1f1;
  }
`;

export const InfoOff = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;
`;
