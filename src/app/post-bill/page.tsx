import Layout from '../layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PostBillPage = () => {
  return (
    <Layout>
      <Header />

      <main className="flex flex-col items-center mt-20">
        <h1 className="text-4xl">Post a Bill</h1>
        <form className="flex flex-col items-center mt-10 w-full max-w-lg">
          <input type="text" placeholder="Bill Title" className="p-2 rounded mb-4 w-full bg-purple-100" />
          <textarea placeholder="Bill Description" className="p-2 rounded mb-4 w-full bg-purple-100 h-32"></textarea>
          <input type="text" placeholder="Amount" className="p-2 rounded mb-4 w-full bg-purple-100" />
          <button type="submit" className="p-3 rounded w-full bg-green-200">Post Bill</button>
        </form>
      </main>

      <Footer />
    </Layout>
  )
}

export default PostBillPage
