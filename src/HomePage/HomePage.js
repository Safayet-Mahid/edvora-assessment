import { Container, Grid } from '@mui/material';
import React from 'react';
import Product from '../Product/Product';

const HomePage = () => {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item md={2}></Grid>
                    <Grid item md={10}>
                        <Product></Product>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default HomePage;