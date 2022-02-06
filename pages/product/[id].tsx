import React from 'react'
import fetch from 'isomorphic-unfetch'
import { GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// dymanic page - all pages

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-next-js.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))
  return {
    paths,
    //incremental static generation - false
    // 404 for everything else
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // page-only
  const id = params?.id as string
  const response = await fetch(
    `https://platzi-next-js.vercel.app/api/avo/${id}`
  )
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    },
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
