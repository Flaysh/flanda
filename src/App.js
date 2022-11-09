import './App.css';
import {Route, Routes} from "react-router";
import Home from "./components/Home/Home";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#144e4d',
            }, secondary: {
                main: '#33a688',
            }, background: {
                default: '#f9f7f1', paper: '#ffffff',
            }, text: {
                main: '#151515'
            }
        }, shape: {
            borderRadius: 20,
        },
    })
    return (<Box className="App">
        <ThemeProvider theme={theme}>
            <Container fixed>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<Feed/>}/>
                    <Route path="/settings" element={<House/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </ThemeProvider>
    </Box>);
}

export default App;
