import styled from 'styled-components';

const DashboardContainer = styled.div`
  background-color: var(--color-neutral);
  height: 100vh;

  header {
    background-color: var(--color-light);
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: var(--color-dark);

    button {
      font-weight: var(--font-weight-700);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export default DashboardContainer;
