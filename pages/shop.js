import Layout from '../components/layout'
import Topbar from '../components/topbar'
import Footer from '../components/footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import ProductSmall from '../components/productSmall'


export default function Shop() {

  // change the properties suitable here
  const [arr, setArr] = useState([
    {
      image: '/1.png',
      name: 'T-shirt',
      price: 23000
    },
    {
      image: '/2.png',
      name: 'Jeans',
      price: 25000
    },
    {
      image: '/3.png',
      name: 'Shoes',
      price: 17000
    },
    {
      image: '/4.png',
      name: 'T-Shirt',
      price: 28000
    },
    {
      image: '/1.png',
      name: 'T-shirt',
      price: 23000
    },
    {
      image: '/2.png',
      name: 'Jeans',
      price: 25000
    },
    {
      image: '/3.png',
      name: 'Shoes',
      price: 17000
    },
    {
      image: '/4.png',
      name: 'T-Shirt',
      price: 28000
    },
    {
      image: '/1.png',
      name: 'T-shirt',
      price: 23000
    },
    {
      image: '/2.png',
      name: 'Jeans',
      price: 25000
    },
    {
      image: '/3.png',
      name: 'Shoes',
      price: 17000
    },
    {
      image: '/4.png',
      name: 'T-Shirt',
      price: 28000
    }
  ])

  useEffect(() => {
    // fetch api here
    // 
  }, [])

  return (
    <div>
      <div className='row'>
        {
          arr.map((value, key) => (
            <React.Fragment key={key}>
              <ProductSmall imgPath={value.image} name={value.name} price={value.price} />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

Shop.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Topbar />
      {page}
      <Footer/>
    </Layout>
  )
}
