import React from 'react'
import Hero from '../Components/Hero'
import ProductCards from '../Components/ProductCards'
import DownloadApp from '../Components/DownloadApp'
import TopProducts from '../Components/TopProducts'

export default function Home() {
  return (
    <>
        <Hero/>
        <ProductCards/>
        <DownloadApp />
        <TopProducts/>
    </>
  )
}
