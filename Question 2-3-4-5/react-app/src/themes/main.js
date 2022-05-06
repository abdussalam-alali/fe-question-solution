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
           light: '#FFC5F6',
           main: '#FFC5F6',
           dark: '#FF9FB1',
       },
       warning: {
           light: '#ff0000',
           main: '#ff0000',
           dark: '#ff0000',
       }
   },
});
export default theme;