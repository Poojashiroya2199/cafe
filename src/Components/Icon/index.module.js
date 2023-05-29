import styled from "styled-components";

export const IconWrapper = styled.button`
  border: none;
  padding: 5px;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    padding: 5px;
    background-color: var(--white);
    box-shadow: 2px 2px grey;

    & > * > * {
      color: #03254c;
      fill: #03254c;
    }
  }

  & > * {
    width: 20px;
    height: 20px;
    & > * {
      color: var(--white);
      fill: var(--white);
    }
  }
`;
