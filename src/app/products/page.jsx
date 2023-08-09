import ProductList from '@/components/products/ProductList'
import ProductsFilter from '@/components/products/ProductsFilter'
import React from 'react'

const ProductsPage = () => {

  const products = [
    {
      _id: 1,
      name: "prdocut 1",
      desc: "product desc",
      price: 2344,
      image: "",
    },
    {
      _id: 2,
      name: "prdocut 2",
      desc: "product 2 desc",
      price: 2344,
      image: "",
    },
    {
      _id: 3,
      name: "prdocut 3",
      desc: "product desc",
      price: 2344,
      image: "",
    }
  ]

  return (
    <div className='flex gap-5 mt-5 flex-col sm:flex-row'>
      <ProductsFilter />
      <ProductList products={products} />
    </div>
  )
}

export default ProductsPage