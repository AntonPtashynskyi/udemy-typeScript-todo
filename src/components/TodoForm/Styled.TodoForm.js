import styled from "styled-components";

export const StyledInputForm = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 15px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    opacity: 0.8;
    transition: all 150ms ease;

    &:focus {
      outline: none;
      opacity: 1;
    }
  }
  button {
    border: none;
    padding: 10px 15px;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.addToDoButtonBgColor};
    color: ${({ theme }) => theme.addToDoButtonColor};
    text-transform: uppercase;
    transition: all 300ms ease;
    user-select: none;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.addToDoButtonHoverColor};
    }
  }
`;
