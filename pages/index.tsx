import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

// // fn serverSide
// export const getServerSideProps = async () => {
//   const response = await fetch('https://platzi-next-js.vercel.app/api/avo')

//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList,
//     },
//   }
// }

// fn clientSide
export const getStaticProps = async () => {
  // page-only
  const response = await fetch('https://platzi-next-js.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />

      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
