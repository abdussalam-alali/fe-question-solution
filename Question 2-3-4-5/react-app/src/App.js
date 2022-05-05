import './App.css';
import { Container, Box, Typography, Button } from "@mui/material";

function App() {
  return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Button>Hello</Button>
          <Typography>Test</Typography>
        </Box>
      </Container>
  );
}

export default App;
