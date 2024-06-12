import Layout from '../layout'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../../styles/Home.module.css';

const LandingPage = () => {
  return (
    <Layout>
      <Head>
        <title>RateXpose Landing Page</title>
      </Head>
      <Header />

      <main className="mt-10">
      <section className="mb-12 max-w-6xl mx-auto p-8 mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Postings</h2>
                <div className="text-gray-600">Location: Calgary, AB</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative bg-purple-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Phone Plans</h3>
                    <div className="mb-2">
                        <img src="https://placehold.co/50" alt="Phone plan logo" className="inline-block"/>
                        <span className="ml-2">56/month</span>
                    </div>
                    <div className="mb-2">
                        <img src="https://placehold.co/50" alt="Phone plan logo" className="inline-block"/>
                        <span className="ml-2">35/month</span>
                    </div>
                    <div className={styles.overlay}>
                        <img src="https://placehold.co/50" alt="Phone plan logo" className="inline-block"/>
                        <span className="ml-2">39/month</span>
                    </div>
                </div>
                <div className="relative bg-purple-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Internet Plans</h3>
                    <div className="mb-2">
                        <img src="https://placehold.co/50" alt="Internet plan logo" className="inline-block"/>
                        <span className="ml-2">56/month</span>
                    </div>
                    <div className="mb-2">
                        <img src="https://placehold.co/50" alt="Internet plan logo" className="inline-block"/>
                        <span className="ml-2">44/month</span>
                    </div>
                    <div className={styles.overlay}>
                        <img src="https://placehold.co/50" alt="Internet plan logo" className="inline-block"/>
                        <span className="ml-2">39/month</span>
                    </div>
                </div>
                <div className="relative bg-purple-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Utility Rates</h3>
                    <div className="mb-2">
                        <img src="https://placehold.co/50" alt="Utility rate logo" className="inline-block"/>
                        <span className="ml-2">1.5/kW</span>
                    </div>
                    <div className="mb-2">
                        <img src="https://placehold.co/50" alt="Utility rate logo" className="inline-block"/>
                        <span className="ml-2">1.01/kW</span>
                    </div>
                    <div className={styles.overlay}>
                        <img src="https://placehold.co/50" alt="Utility rate logo" className="inline-block"/>
                        <span className="ml-2">1.0/kW</span>
                    </div>
                </div>
            </div>
            <div className="mt-6 text-center">
                <a href="#" className="text-xl text-blue-600 hover:underline">View More Postings <i className="fas fa-arrow-right"></i></a>
            </div>
        </section>

        <div className="flex justify-center items-center mt-20 bg-purple-100 p-4 rounded-lg mx-10">
          <img src="https://placehold.co/32x32" alt="Help Icon" className="mr-4" />
          <div>
            <h3 className="text-xl">Help the Cause!</h3>
            <p>Help bring Price Transparency to the market by anonymously posting your prices</p>
            <a href="/post-bill" className="text-blue-500">Post your bill </a>
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default LandingPage
