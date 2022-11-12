import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import MainAppBar from "./Layout/MainAppBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";
import Property from "./components/Property/Property";
import Box from "@mui/material/Box";

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#144e4d'
            },
            secondary: {
                main: '#33a688',
            }, background: {
                default: '#f9f7f1', paper: '#ffffff',
            }, text: {
                main: '#151515'
            }
        }, shape: {
            borderRadius: 25,
        },
        typography: {
            fontFamily: ['Plus Jakarta Sans'],
        },
    })
    return (<div className="App">
        <ThemeProvider theme={theme}>
            <MainAppBar/>
            <Box mt={10}>
                <Routes>
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/feed/property/:id" element={<Property/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </Box>
        </ThemeProvider>
    </div>)
        ;
}

export default App;
