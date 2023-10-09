import AxiosInterceptor from './AxiosInterceptor';
import RoutesMain from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AxiosInterceptor>
        <RoutesMain />
      </AxiosInterceptor>
    </>
  );
};

export default App;
