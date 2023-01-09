import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import styles from '../styles/ProductOffer.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { data } from 'jquery';
import { toast } from 'react-toastify';


function ProductOffer({notify, productId, offerName ,productName, productPrice, productImage }) {
  function truncateString(str) {
    if (str.length <= 18) {
      return str;
    } else {
      return str.substring(0, 15) + "...";
    }
  }

  function addToWishList(id,name,image,price){
    if (localStorage.getItem('wishlist')){
      let data = JSON.parse(localStorage.getItem('wishlist'))
      let len = Object.keys(data).length
      // len = len+1
      let newData = {}
      newData['id'] = id
      newData['prodName'] = name
      newData['prodImage'] = image
      newData['prodPrice'] = price
      data[len] = newData
      data = JSON.stringify(data)
      localStorage.setItem('wishlist',data)
      console.log(JSON.parse(localStorage.getItem('wishlist')))
      toast.success("❤️ Added to Wishlist",{'icon':false})

    }
    else{
      let data = [{}]
      data[0]['id'] = id
      data[0]['prodName'] = name
      data[0]['prodImage'] = image
      data[0]['prodPrice'] = price
      data = JSON.stringify(data)
      localStorage.setItem('wishlist',data)
      console.log(JSON.parse(localStorage.getItem('wishlist')))
      toast.success("❤️ Added to Wishlist",{'icon':false})

    }
  }

  function addToCart(id,name,image,price){
    if (localStorage.getItem('cart')){
      let data = JSON.parse(localStorage.getItem('cart'))
      let len = Object.keys(data).length
      // len = len+1
      let newData = {}
      newData['id'] = id
      newData['prodName'] = name
      newData['prodImage'] = image
      newData['prodPrice'] = price
      data[len] = newData
      data = JSON.stringify(data)
      localStorage.setItem('cart',data)
      console.log(JSON.parse(localStorage.getItem('cart')))
      toast.success("🛒 Added to Cart",{'icon':false})

    }
    else{
      let data = [{}]
      data[0]['id'] = id
      data[0]['prodName'] = name
      data[0]['prodImage'] = image
      data[0]['prodPrice'] = price
      data = JSON.stringify(data)
      localStorage.setItem('cart',data)
      console.log(JSON.parse(localStorage.getItem('cart')))
      toast.success("🛒 Added to Wishlist",{'icon':false})
    }
  }

  return (
    <>

      <div className={styles.productCard + " mx-2"} >
        <div className={styles.wishWrapper + " p-2"}  onClick={e => addToWishList(productId, productName,productImage,productPrice)}><Icon icon="ph:heart" /> </div>
        <div className={styles.offerWrapper + " p-2"}> <p className="mb-0">{offerName}</p></div>
        <Link href={`/prods/${productId}`} >
          <div className="image">
            <Image src={process.env.NEXT_PUBLIC_MEDIA_URL + productImage} alt={productName} width={1080} height={1080} className={styles.newProdImage}></Image>
          </div>
        </Link>
        <div className={styles.productDetails + " "}>
          <div className="row p-0 w-100">
            <div className={styles.prodName + " col-9 p-0 py-1"}>
              <small className={styles.productName + "  mx-2  text-center proName"}>{truncateString(productName)}</small>
            </div>
            <div className={styles.prodPrice + " col-3 p-0 py-1"}>
              <small className={styles.productPrice + " mx-2  text-center"}>₹{productPrice}</small>
            </div>
            <div className={styles.addBtn + " col-12 py-1 mt-1 pb-2"}  onClick={e => addToCart(productId, productName,productImage,productPrice)}>
              <small className='d-flex align-items-center' > Add To Cart </small>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default ProductOffer