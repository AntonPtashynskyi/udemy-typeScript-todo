import styled from "styled-components";

type StyledTodoWrapperProps = {
  children: any;
  open: boolean;
};

export const StyledTodoWrapper = styled.div<StyledTodoWrapperProps>`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  height: 100vh;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};
  transition: all 300ms ease;
  background-color: ${({ theme }) => theme.sideMenuColor};
  box-shadow: ${({ theme }) => theme.styledTodoWrapperShadow};
`;

export const StyledModalButton = styled.button<StyledTodoWrapperProps>`
  position: absolute;
  left: -50px;
  top: 30px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  svg {
    transition: all 500ms ease;
    transform: ${({ open }) => (open ? "rotate(0)" : "rotate(45deg)")};
  }
`;
