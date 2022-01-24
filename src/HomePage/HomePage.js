import { Container, Grid } from '@mui/material';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Product from '../Product/Product';

const HomePage = () => {
    return (
        <div style={{ backgroundColor: "#232323" }}>
            <Container >
                <Grid container>
                    <Grid item md={2}>
                        <Dropdown></Dropdown>
                    </Grid>
                    <Grid item md={10}>
                        <Product></Product>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default HomePage;