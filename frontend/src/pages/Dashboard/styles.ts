import styled from 'styled-components';

const DashboardContainer = styled.div`
  background-color: var(--color-neutral);
  height: 100vh;

  header {
    background-color: var(--color-light);
    height: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark);

    button {
      font-weight: var(--font-weight-700);
    }

    h1 {
      color: var(--color-light);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 48px;
  }
`;

export default DashboardContainer;
