import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    Button
} from '@mui/material';

const pages = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'Products',
        link: '/products',
    },
];

const Header = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <AppBar>
            <Container position="fixed" maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map(({ label, link }, index) => {
                            const active = pathname === link;

                            return (
                                <Button
                                    key={`menu-item-${index}`}
                                    sx={{ 
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontWeight: active ? 'bold' : 'normal',
                                    }}
                                    component={RouterLink}
                                    to={link}
                                >
                                    {label}
                                </Button>
                            )
                        })}
                    </Box>
                    </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;