import { useContext } from 'react';
import UserContext from '@common/contexts/UserContext';
import { Box, Typography } from '@mui/material';

const Home = () => {
    const { user} = useContext(UserContext);
    const { username } = user || {};

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant='h1'>
                Welcome {username}!
            </Typography>
        </Box>
    );
  }
  
  export default Home;
  