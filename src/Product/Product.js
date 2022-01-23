import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import Company from '../Company/Company';
// ????????????????????????????????
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import "../Company/Company.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper';
import { filledInputClasses } from '@mui/material';
import Company from '../Company/Company';

// install Swiper modules
SwiperCore.use([Navigation]);
// ????????????????????????????????????????????????????????????

const Product = () => {

    const [allcompanies, setAllCompanies] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [uniqueCompanies, setUniqueCompanies] = useState([])
    useEffect(() => {
        fetch("https://assessment-edvora.herokuapp.com/")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllCompanies(data)
                const unique = [...new Set(data.map(item => item.product_name))];
                setUniqueCompanies(unique)

            })
    }, [])
    // console.log(uniqueCompanies)

    const result = allcompanies.reduce(function (r, a) {
        r[a.product_name] = r[a.product_name] || [];
        r[a.product_name].push(a);
        return r;
    }, Object.create(null));

    const individualCompany = Object.keys(result)

    console.log(individualCompany);
    console.log(result);



    return (

        <div>
            <Typography variant='h2' component="div">Edvora</Typography>
            <Typography variant='h4' component="div">Products</Typography>
            {
                individualCompany.map(company => {
                    return <Company
                        key={company}
                        name={company}
                        result={result}
                    >

                    </Company>
                })

            }
        </div>
    );
};

export default Product;