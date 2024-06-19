import Layout from '../layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PostBillPage = () => {
  return (
    <Layout>
      <Header />

      <main className="flex flex-col items-center mt-10 min-h-screen">
        <h1 className="text-4xl font-bold">Post a Bill</h1>
          <div className="mt-5 ">
            <h2  className="text-3xl"> Choose your category </h2>
          </div>
          <div className="mt-10 flex flex-row items-center gap-10">
              <a href='/post-mobile-plan' className='bg-primary rounded-md p-2'> Mobile Plan</a>
              <a href='/' className='bg-primary rounded-md p-2'> Utility Bill</a>
              <a href='' className='bg-primary rounded-md p-2'> Internet</a>
              <a href='' className='bg-primary rounded-md p-2'> Insurance</a>
          </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostBillPage
