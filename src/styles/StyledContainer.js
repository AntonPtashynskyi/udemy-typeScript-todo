import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 768px;
  padding: 0 20px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  color: ${({ theme }) => theme.primaryTextColor};
`;
