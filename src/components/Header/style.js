import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1em;

  span {
    margin-left: 0.4em;
  }
`;
