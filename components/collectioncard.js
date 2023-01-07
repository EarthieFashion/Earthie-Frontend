import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import styles from '../styles/CollectionCard.module.css'


function CollectionCard({ productName, productPrice, productImage }) {
  function truncateString(str) {
    if (str.length <= 15) {
      return str;
    } else {
      return str.substring(0, 15) + "...";
    }
  }

  return (
    <div className={styles.productCard + " mx-2"}
      style={{ backgroundImage: 'url("' + `${process.env.NEXT_PUBLIC_HOST}` + productImage + '")' }} >
      <div className={styles.productDetails + " "}>
        <div className="row p-0 w-100">
          <div className={styles.prodName + " col-12 p-0 "}>
            <div className={styles.addBtn + " col-12 py-1 pb-2"}>
              <small className='d-flex align-items-center'>{productName}</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CollectionCard