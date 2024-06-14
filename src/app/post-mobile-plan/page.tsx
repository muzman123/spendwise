import Layout from '../layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PostMobileBillPage = () => {
  return (
    <Layout>
      <Header />

      <main className="flex flex-col items-center mt-10 min-h-screen">
        <h1 className="text-4xl font-bold">Post a Bill</h1>
          <div className="mt-5 ">
          </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostMobileBillPage
