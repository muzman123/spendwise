import Layout from '../layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InternetProvider from '../components/internetProviders'

const PostInternetBillPage = () => {
  return (
    <Layout>
      <Header />

      <main className="flex flex-col items-center mt-10 min-h-screen">
        <h1 className="text-4xl font-bold">Post Internet Bill</h1>
          <div className="mt-5 ">
              <InternetProvider/>
            </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostInternetBillPage
