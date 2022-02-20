import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  width: 85vw;
  overflow: scroll;
`;

export const Column = styled.div`
  width: 14em;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ColumnHead = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 1.2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Item = styled.div`
  padding: 10px;
  margin: 10px;
  font-size: 0.8em;
  cursor: pointer;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(152, 235, 225, 0.4);
`;
