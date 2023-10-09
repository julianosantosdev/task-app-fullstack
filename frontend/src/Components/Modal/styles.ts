import styled from 'styled-components';

const StyledModalContainer = styled.section`
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 90%;
    max-width: 900px;
    height: 25rem;
    color: var(--color-light);
    background-color: var(--color-dark);
    border-radius: 8px;
  }
`;

export default StyledModalContainer;
