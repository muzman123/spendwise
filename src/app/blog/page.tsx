import Layout from '../layout'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | RateXpose</title>
      </Head>
      <Header />

      <main className="mt-10 px-10">
        <section className="mt-20">
          <h2 className="text-3xl text-center mb-10">Latest Blog Posts</h2>
          <div className="flex justify-around">
            <div className="bg-purple-100 p-4 rounded-lg w-1/3 text-center">
              <h3 className="text-xl mb-4">Blog Post 1</h3>
              <p className="text-base"></p> {/* Leave empty */}
              <a href="#" className="text-blue-500 mt-4 inline-block">Read More →</a>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg w-1/3 text-center">
              <h3 className="text-xl mb-4">Blog Post 2</h3>
              <p className="text-base"></p> {/* Leave empty */}
              <a href="#" className="text-blue-500 mt-4 inline-block">Read More →</a>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg w-1/3 text-center">
              <h3 className="text-xl mb-4">Blog Post 3</h3>
              <p className="text-base"></p> {/* Leave empty */}
              <a href="#" className="text-blue-500 mt-4 inline-block">Read More →</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  )
}

export default BlogPage
