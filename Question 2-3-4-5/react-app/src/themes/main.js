import { createTheme } from "@mui/material";

const theme = createTheme({
   palette: {
       background: {
           default: '#fff',
           paper: '#fff'
       },
       primary: {
           light: '#EBAFE0',
           main: '#5E7BFD',
           dark: '#3A53A2',
       },
       secondary: {
           light: '#EBD4F7',
           main: '#FFC5F6',
           dark: '#FF9FB1',
       }
   },
});
export default theme;