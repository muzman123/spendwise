import Layout from '../layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileProvider from '../components/mobileProviders'

const PostMobileBillPage = () => {
  return (
    <Layout>
      <Header />

      <main className="flex flex-col items-center mt-10 min-h-screen">
        <h1 className="text-4xl font-bold">Post Mobile Bill</h1>
          <div className="mt-5 ">
              <MobileProvider/>
            </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostMobileBillPage
