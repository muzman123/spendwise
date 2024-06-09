import Layout from '../layout'

const PostBillPage = () => {
  return (
    <Layout>
      <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/favicon.ico" alt="RateXpose logo" className="w-6 h-6" />
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

      <main className="flex flex-col items-center mt-20">
        <h1 className="text-4xl">Post a Bill</h1>
        <form className="flex flex-col items-center mt-10 w-full max-w-lg">
          <input type="text" placeholder="Bill Title" className="p-2 rounded mb-4 w-full bg-purple-100" />
          <textarea placeholder="Bill Description" className="p-2 rounded mb-4 w-full bg-purple-100 h-32"></textarea>
          <input type="text" placeholder="Amount" className="p-2 rounded mb-4 w-full bg-purple-100" />
          <button type="submit" className="p-3 rounded w-full bg-green-200">Post Bill</button>
        </form>
      </main>

      <footer className="bg-purple-200 p-4 text-center mt-20">
        <div>
          <a href="/landing" className="text-black">RateXpose</a> | <a href="/contact-us" className="text-black">Contact Us</a>
        </div>
      </footer>
    </Layout>
  )
}

export default PostBillPage
