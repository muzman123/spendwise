import Layout from '../layout'
import Head from 'next/head'

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>RateXpose Landing Page</title>
      </Head>
      <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/favicon.ico" alt="RateXpose logo" className="w-6 h-6" />
          <span className="ml-2">RateXpose</span>
        </div>
        <div className="flex-grow mx-4">
          <input type="text" className="p-2 border border-black rounded w-full" placeholder="Search by provider, or company..." />
        </div>
        <nav className="flex space-x-4">
        <a href="/landing" className="text-black">Home</a>
          <a href="/about" className="text-black">About</a>
          <a href="/blog" className="text-black">Blog</a>
          <a href="/post-bill" className="text-black">Post Bill</a>
          <a href="/login" className="text-black">Login/Signup</a>
        </nav>
      </header>

      <main className="mt-10">
        <div className="flex justify-between px-10">
          <h2 className="text-2xl">Latest Postings</h2>
          <span className="text-xl">Location: Calgary, AB</span>
        </div>
        <div className="flex justify-around mt-6 px-10">
          <div className="bg-purple-100 p-4 rounded-lg w-1/4 text-center">
            <h3 className="text-xl mb-4">Phone Plans</h3>
            <div className="mb-2">
              <img src="https://placehold.co/32x32" alt="Logo" className="inline-block" />
              <span className="ml-2">$45/month</span>
            </div>
            <div className="mb-2">
              <img src="https://placehold.co/32x32" alt="Logo" className="inline-block" />
              <span className="ml-2">$30/month</span>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg w-1/4 text-center">
            <h3 className="text-xl mb-4">Internet Plans</h3>
            <div className="mb-2">
              <img src="https://placehold.co/32x32" alt="Logo" className="inline-block" />
              <span className="ml-2">$50/month</span>
            </div>
            <div className="mb-2">
              <img src="https://placehold.co/32x32" alt="Logo" className="inline-block" />
              <span className="ml-2">$35/month</span>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg w-1/4 text-center">
            <h3 className="text-xl mb-4">Utility Rates</h3>
            <div className="mb-2">
              <img src="https://placehold.co/32x32" alt="Logo" className="inline-block" />
              <span className="ml-2">10¢/kWh</span>
            </div>
            <div className="mb-2">
              <img src="https://placehold.co/32x32" alt="Logo" className="inline-block" />
              <span className="ml-2">12¢/kWh</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="/login" className="text-xl text-blue-500">View More Postings →</a>
        </div>

        <div className="flex justify-center items-center mt-20 bg-purple-100 p-4 rounded-lg mx-10">
          <img src="https://placehold.co/32x32" alt="Help Icon" className="mr-4" />
          <div>
            <h3 className="text-xl">Help the Cause!</h3>
            <p>Help bring Price Transparency to the market by anonymously posting your prices</p>
            <a href="/post-bill" className="text-blue-500">Post your bill </a>
          </div>
        </div>
      </main>

      <footer className="bg-purple-200 p-4 text-center mt-20">
      <div>
        <a href="/landing" className="text-black">RateXpose</a> | <a href="/contact-us" className="text-black">Contact Us</a>
      </div>
      </footer>
    </Layout>
  )
}

export default LandingPage
