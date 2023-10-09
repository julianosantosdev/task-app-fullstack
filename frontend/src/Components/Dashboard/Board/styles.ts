import styled from 'styled-components';

const StyledBoard = styled.ul`
  min-height: 5rem;
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin: 0 32px;
  border-radius: 8px;

  h1 {
    background-color: var(--color-brand-1);
    width: 100%;
    border-radius: 8px 8px 0 0;
    padding: 8px;
  }
`;

export default StyledBoard;
