
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import Home from './pages/Home';
import MyRoutes from './routes';
import { GlobalStyle } from './theme/globalstyle';
import { theme } from './theme/theme';


const PageContainer = styled.div`
  padding: 32px;
  
  @media screen and (min-device-width : 421px) and (max-device-width : 800px) {
    padding: 5vw;
  }

  @media screen and (max-device-width : 420px) {
    padding: 5vw;
  }

`

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <PageContainer>
        <MyRoutes />
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
