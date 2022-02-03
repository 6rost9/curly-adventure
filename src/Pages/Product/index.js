import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { getProductById } from '@common/api';

const Product = () => {
    const { id } = useParams();
    const [ data, setData ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true; 

        getProductById(id)
            .then(data => {
                if (isMounted) {
                    setData(data);
                }
            })
            .catch(() =>{
                navigate(`/notfound`);
            })

        return () => { isMounted = false };
    },[])

    if (!data) {
        return null;
    }

    const { Name, Description, Price } = data;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant='h4' mt={4} mb={2}>
                {Name}
            </Typography>
            <Typography variant='body1' mb={1}>
                {Description}
            </Typography>
            <Typography variant='h6'>
                Price: {Price}
            </Typography>
        </Box>
    );
  }
  
  export default Product;
  