import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productlist, setProductlist] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => {
        setProductlist(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productlist.map((product) => (
        <div key={product.id}>
          {product.name} - {product.id}
        </div>
      ))}
    </div>
  )
}

export default HomePage
