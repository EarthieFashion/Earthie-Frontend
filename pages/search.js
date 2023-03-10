import React, { useEffect, useState } from 'react'
import styles from '../styles/Search.module.css'
import { Icon } from '@iconify/react';
import Product from '../components/product';
import axios from 'axios';
import Head from 'next/head';

export async function getStaticProps() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/products/`);
    const data = res.data;
    return {
        props: {
            data,
        },
    };
}



function search(props) {
    const [prods, setProds] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false)
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setProds(props.data)
        setPageLoaded(true)
    }, [])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}productSearch/${inputValue}/`);
            const data = res.data;
            console.log(data)
            setProds(data)
        }

        if (inputValue) {
            fetchData();
        }
        else {
            setProds(props.data)
        }

    }, [inputValue]);



    return (
        <>
            <Head>
                <title>Earthie Fashion {inputValue && `- ${inputValue}`}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.SearchWrapper + " d-flex align-items-center px-2"}>
                <Icon icon="eva:search-outline" className='mx-1' />
                <input type="text" onChange={e => setInputValue(e.target.value)} placeholder='Search here' className={styles.searchBar + " my-2 "} />
            </div>
            {pageLoaded &&
                <div className={styles.prodContainer + " px-5"}>
                    <div className="productHead px-5 ">
                        <p className={styles.resultHead + " "}> Top Results</p>
                    </div>

                    <div className="row">
                        {prods.map((slide) => {
                            if (slide.is_published) {
                                return (
                                    <div key={slide.id} className="col-12 col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center my-3">
                                        <Product productId={slide.id} productName={slide.prodcutName} productPrice={slide.productPrice} productImage={slide.productImage} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default search