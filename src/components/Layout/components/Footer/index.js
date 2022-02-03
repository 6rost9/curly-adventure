import { Box, Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const Footer = () => {
    return (
        <Box
            minHeight="100px"
            sx={{
                bgcolor: blue[900]
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: 2
                }}
            >
            <Typography
                color="white"
                variant="h6"
            >
                Some footer
            </Typography>
            </Container>
        </Box>
    )
}

export default Footer;