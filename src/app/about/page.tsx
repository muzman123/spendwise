import Layout from '../layout'
import Head from 'next/head'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About RateXpose</title>
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
        <section>
          <h1 className="text-4xl text-center mb-10">About RateXpose</h1>
          <div className="bg-purple-100 p-6 rounded-lg text-lg mb-20">
            <p>RateXpose is a platform dedicated to bringing transparency to pricing in various markets. Our mission is to empower consumers by providing them with the information they need to make informed decisions. Whether you're looking for the best phone plans, internet packages, or utility rates, RateXpose has got you covered.</p>
            <p className="mt-4">Our community-driven approach allows users to share and compare prices anonymously, ensuring that you always have access to the most accurate and up-to-date information. Join us in our mission to bring price transparency to the market!</p>
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

export default AboutPage
