import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from "next/router";  
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const notify = (toastText) => {toastText};


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = (router.pathname === "/login" || router.pathname === "/signup" ) ? false : true;
  return <><NextNProgress color="#030203" height={3} options={{ easing: 'ease', speed: 1500 }} startPosition={0.55} showOnShallow={true} /> <Nav notify={notify}/> <ToastContainer /> <Component notify={notify} {...pageProps} /> {showHeader && <Footer/>} </>
}

export default MyApp
