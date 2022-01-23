import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./Company.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper';
import { filledInputClasses, Grid } from '@mui/material';

// install Swiper modules
SwiperCore.use([Navigation]);

const Company = (props) => {
    const { result, name } = props;
    const filteredProducts = result[name]
    console.log(filteredProducts)
    return (
        <div>
            <h2>{name}</h2>

            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true}

                navigation={true} className="mySwiper ">
                {
                    filteredProducts.map(singleProduct => <SwiperSlide className='customSwiper'
                    >
                        <Card sx={{}}>
                            <Grid container sx={{}}>
                                <Grid item md={5}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: "70px", height: "70px" }}
                                        image={singleProduct.image}
                                        alt="green iguana"
                                    />
                                    <Typography variant='p' component='div'>location</Typography>
                                </Grid>
                                <Grid item md={7} sx={{ textAlign: "left" }}>
                                    <Typography variant='p' component='div'>{singleProduct.product_name}</Typography>
                                    <Typography variant='p' component='div'>{singleProduct.brand_name}</Typography>
                                    <Typography variant='p' component='div'>$ {singleProduct.price}</Typography>
                                    <Typography variant='p' component='div'>Date: date</Typography>

                                </Grid>
                            </Grid>

                            <CardContent>

                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left" }}>
                                    {singleProduct.discription}
                                </Typography>
                            </CardContent>

                        </Card>
                    </SwiperSlide>)
                }

            </Swiper>


        </div >
    );
};

export default Company;