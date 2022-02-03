// import { useContext } from 'react';
// import UserContext from '@common/contexts/UserContext';
import { Box, Typography } from '@mui/material';

const NotFound = () => {


    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant='h1'>
                Not found
            </Typography>
        </Box>
    );
  }
  
  export default NotFound;
  