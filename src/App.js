import './App.css';
import {Container, createTheme, ThemeProvider} from "@mui/material";
import MainAppBar from "./Layout/MainAppBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home/Home";
import Feed from "./components/Feed/Feed";

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
            borderRadius: 20,
        },
        typography: {
            fontFamily: 'Plus Jakarta Sans',
        },
    })
    return (<div className="App">
        <ThemeProvider theme={theme}>
            <MainAppBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/feed" element={<Feed/>}/>
                    {/*<Route path="blogs" element={<Feed />} />*/}
                    {/*<Route path="contact" element={<About Me />} />*/}
                </Routes>
        </ThemeProvider>
    </div>)
        ;
}

export default App;
