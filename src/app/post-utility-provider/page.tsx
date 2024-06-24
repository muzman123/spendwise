import Layout from '../layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UtilityProvider from '../components/utilityProviders'

const PostUtilityBillPage = () => {
  return (
    <Layout>
      <Header />

      <main className="flex flex-col items-center mt-10 min-h-screen">
        <h1 className="text-4xl font-bold">Post Utility Bill</h1>
        <div className="mt-5">
          <UtilityProvider />
        </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostUtilityBillPage
