import styled from "styled-components";

export const StyledListItem = styled.li`
  background-color: ${({ theme }) => theme.listItemBgColor};
  color: ${({ theme }) => theme.listItemColor};
  padding: 30px;
  border-radius: 40px;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.span`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.buttonBgColor};
  color: ${({ theme }) => theme.buttonColor};
  margin-left: auto;
  transition: all 300ms ease;

  &:hover {
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
`;
