import styled, { css } from "styled-components";

export const HomeStyled = styled.div`
  border: ${(props) => (!props.border ? "1px solid red" : "1px solid blue")};
  width: 100px;
  height: 100px;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  & div {
    span {
      color: red;
      &:before {
        content: '';
      }
    }
  }
  
  & .width-200 {
    color: blue;
  }
`;
