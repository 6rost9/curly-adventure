import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Container
                sx={{
                    mt: '68px',
                    display: 'flex',
                    flexGrow: 1,
                }}
            >
                {children}
            </Container>
            <Footer />
        </>
    )
};

export default Layout;