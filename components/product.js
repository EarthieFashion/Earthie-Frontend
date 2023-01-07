import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import styles from '../styles/Product.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { data } from 'jquery';
import { toast } from 'react-toastify';


function Product({notify, productId, productName, productPrice, productImage }) {
  function truncateString(str) {
    if (str.length <= 15) {
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

            {/* <button className={styles.add_to_cart}>
              <span>Add to cart</span>
              <svg className={styles.morph} viewBox="0 0 64 13">
                <path d="M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z" />
              </svg>
              <div className={styles.shirt}>
                <svg className={styles.first} viewBox="0 0 24 24">
                  <path d="M4.99997 3L8.99997 1.5C8.99997 1.5 10.6901 3 12 3C13.3098 3 15 1.5 15 1.5L19 3L22.5 8L19.5 10.5L19 9.5L17.1781 18.6093C17.062 19.1901 16.778 19.7249 16.3351 20.1181C15.4265 20.925 13.7133 22.3147 12 23C10.2868 22.3147 8.57355 20.925 7.66487 20.1181C7.22198 19.7249 6.93798 19.1901 6.82183 18.6093L4.99997 9.5L4.5 10.5L1.5 8L4.99997 3Z" />
                  <g>
                    <path d="M16.3516 9.65383H14.3484V7.83652H14.1742V9.8269H16.5258V7.83652H16.3516V9.65383Z" />
                    <path d="M14.5225 6.01934V7.66357H14.6967V7.4905H14.8186V7.66357H14.9928V6.01934H14.8186V7.31742H14.6967V6.01934H14.5225Z" />
                    <path d="M14.1742 5.67319V7.66357H14.3484V5.84627H16.3516V7.66357H16.5258V5.67319H14.1742Z" />
                    <path d="M15.707 9.48071H15.8812V9.28084L16.0032 9.4807V9.48071H16.1774V7.83648H16.0032V9.14683L15.8812 8.94697V7.83648H15.707V9.48071Z" />
                    <path d="M15.5852 6.01931H15.1149V6.19238H15.5852V6.01931Z" />
                    <path d="M15.707 6.01934V7.66357H15.8812V7.46371L16.0032 7.66357H16.1774V6.01934H16.0032V7.32969L15.8812 7.12984V6.01934H15.707Z" />
                    <path d="M15.411 7.31742H15.2891V6.53857H15.411V7.31742ZM15.1149 7.66357H15.2891V7.4905H15.411V7.66357H15.5852V6.3655H15.1149V7.66357Z" />
                    <path d="M14.5225 8.69756L14.8186 9.18291V9.30763H14.6967V9.13455H14.5225V9.48071H14.9928V9.13456V9.13455L14.6967 8.64917V8.00956H14.8186V8.6586H14.9928V7.83648H14.5225V8.69756Z" />
                    <path d="M15.411 9.30763H15.2891V8.00956H15.411V9.30763ZM15.1149 9.48071H15.5852V7.83648H15.1149V9.48071Z" />
                  </g>
                </svg>
                <svg className={styles.second} viewBox="0 0 24 24">
                  <path d="M4.99997 3L8.99997 1.5C8.99997 1.5 10.6901 3 12 3C13.3098 3 15 1.5 15 1.5L19 3L22.5 8L19.5 10.5L19 9.5L17.1781 18.6093C17.062 19.1901 16.778 19.7249 16.3351 20.1181C15.4265 20.925 13.7133 22.3147 12 23C10.2868 22.3147 8.57355 20.925 7.66487 20.1181C7.22198 19.7249 6.93798 19.1901 6.82183 18.6093L4.99997 9.5L4.5 10.5L1.5 8L4.99997 3Z" />
                  <g>
                    <path d="M16.3516 9.65383H14.3484V7.83652H14.1742V9.8269H16.5258V7.83652H16.3516V9.65383Z" />
                    <path d="M14.5225 6.01934V7.66357H14.6967V7.4905H14.8186V7.66357H14.9928V6.01934H14.8186V7.31742H14.6967V6.01934H14.5225Z" />
                    <path d="M14.1742 5.67319V7.66357H14.3484V5.84627H16.3516V7.66357H16.5258V5.67319H14.1742Z" />
                    <path d="M15.707 9.48071H15.8812V9.28084L16.0032 9.4807V9.48071H16.1774V7.83648H16.0032V9.14683L15.8812 8.94697V7.83648H15.707V9.48071Z" />
                    <path d="M15.5852 6.01931H15.1149V6.19238H15.5852V6.01931Z" />
                    <path d="M15.707 6.01934V7.66357H15.8812V7.46371L16.0032 7.66357H16.1774V6.01934H16.0032V7.32969L15.8812 7.12984V6.01934H15.707Z" />
                    <path d="M15.411 7.31742H15.2891V6.53857H15.411V7.31742ZM15.1149 7.66357H15.2891V7.4905H15.411V7.66357H15.5852V6.3655H15.1149V7.66357Z" />
                    <path d="M14.5225 8.69756L14.8186 9.18291V9.30763H14.6967V9.13455H14.5225V9.48071H14.9928V9.13456V9.13455L14.6967 8.64917V8.00956H14.8186V8.6586H14.9928V7.83648H14.5225V8.69756Z" />
                    <path d="M15.411 9.30763H15.2891V8.00956H15.411V9.30763ZM15.1149 9.48071H15.5852V7.83648H15.1149V9.48071Z" />
                  </g>
                </svg>
              </div>
              <div className={styles.cart}>
                <svg viewBox="0 0 36 26">
                  <path d="M1 2.5H6L10 18.5H25.5L28.5 7.5L7.5 7.5" className={styles.shape} />
                  <path d="M11.5 25C12.6046 25 13.5 24.1046 13.5 23C13.5 21.8954 12.6046 21 11.5 21C10.3954 21 9.5 21.8954 9.5 23C9.5 24.1046 10.3954 25 11.5 25Z" className={styles.wheel} />
                  <path d="M24 25C25.1046 25 26 24.1046 26 23C26 21.8954 25.1046 21 24 21C22.8954 21 22 21.8954 22 23C22 24.1046 22.8954 25 24 25Z" className={styles.wheel} />
                  <path d="M14.5 13.5L16.5 15.5L21.5 10.5" className={styles.tick} />
                </svg>
              </div>
            </button> */}
            <div className={styles.addBtn + " col-12 py-1 mt-1 pb-2"}  onClick={e => addToCart(productId, productName,productImage,productPrice)}>
              <small className='d-flex align-items-center' > Add To Cart </small>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Product