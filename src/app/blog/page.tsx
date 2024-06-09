import Layout from '../layout'
import Head from 'next/head'
import Image from 'next/image'

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | RateXpose</title>
      </Head>
      <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/favicon.ico" alt="RateXpose logo" width={24} height={24} />
          <span className="ml-2">RateXpose</span>
        </div>
        <div className="flex-grow mx-4">
          <input type="text" className="p-2 border border-black rounded w-full" placeholder="Search the community..." />
        </div>
        <nav className="flex space-x-4">
        <a href="/landing" className="text-black">Home</a>
          <a href="/about" className="text-black">About</a>
          <a href="/blog" className="text-black">Blog</a>
          <a href="/post-bill" className="text-black">Post Bill</a>
          <a href="/login" className="text-black">Login/Signup</a>
        </nav>
      </header>

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

      <footer className="bg-purple-200 p-4 text-center mt-20">
      <div>
        <a href="/landing" className="text-black">RateXpose</a> | <a href="/contact-us" className="text-black">Contact Us</a>
      </div>
      </footer>
    </Layout>
  )
}

export default BlogPage
