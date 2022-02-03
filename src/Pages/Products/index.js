import { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import { Box, Typography, Link, List, ListItem } from '@mui/material';
import { getProducts } from '@common/api';

const Products = () => {
    const [ data, setData ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true; 

        getProducts()
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

    if (!data || !data.length) {
        return null;
    }

    return (
        <Box>
            <Typography variant='h4' mt={4}>
                List of products:
            </Typography>
            <List mt={2}>
                {data.map(({ id, Name }) => (
                    <ListItem
                        key={`product-${id}`}
                        disableGutters
                    >
                        <Link to={`/products/${id}`} underline="none" component={RouterLink}>
                            {Name}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
  }
  
  export default Products;
  