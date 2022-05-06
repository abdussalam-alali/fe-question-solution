import './App.css';
import {Container, ThemeProvider, CssBaseline, Toolbar} from "@mui/material";
import mainTheme from './themes/main';
import ResponsiveAppBar from "./components/layout/Navigation";
import ContentBox from "./components/layout/ContentBox";
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/index.js';
function App() {
  return (
      <ThemeProvider theme={mainTheme}>
          <ResponsiveAppBar />
          <Toolbar />
          <CssBaseline />
          <Container maxWidth="md" >
              <Router>
                  <ContentBox>
                        <AppRoutes />
                </ContentBox>
              </Router>

          </Container>
      </ThemeProvider>
  );
}

export default App;
