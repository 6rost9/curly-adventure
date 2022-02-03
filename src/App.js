import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';
import Protected from './components/Protected';
import { UserProvider } from '@common/contexts/UserContext';
import Layuot from './components/Layout';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';;

const theme = createTheme({
    components: {
        MuiCssBaseline: {
          styleOverrides: {
                'body, html': {
                    height: '100%'
                },
                '#root': {
                    height: '100%;',
                    display: 'flex',
                    flexDirection: 'column',
                }
            }
        },  
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <UserProvider>
            <SnackbarProvider>
                <CssBaseline />
                <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={
                        <Protected>
                            <Layuot >
                                <Home />
                            </Layuot>
                        </Protected>
                    } />
                    <Route exact path="/products" element={
                        <Protected>
                            <Layuot >
                                <Products />
                            </Layuot>
                        </Protected>
                    } />
                    <Route exact path="/products/:id" element={
                        <Protected>
                            <Layuot >
                                <Product />
                            </Layuot>
                        </Protected>
                    } />
                    <Route exact path="/notfound" element={
                        <Protected>
                            <Layuot >
                                <NotFound />
                            </Layuot>
                        </Protected>
                    } />
                    <Route exact path="*" element={
                        <Layuot >
                            <NotFound />
                        </Layuot>
                    } />
                </Routes>
                </BrowserRouter>
            </SnackbarProvider>
        </UserProvider>
    </ThemeProvider>
  );
}

export default App;
