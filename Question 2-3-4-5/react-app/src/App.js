import './App.css';
import {Container, ThemeProvider, CssBaseline} from "@mui/material";
import mainTheme from './themes/main';
console.log(mainTheme);
function App() {
  return (
      <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <Container maxWidth="sm" >

          </Container>
      </ThemeProvider>
  );
}

export default App;
