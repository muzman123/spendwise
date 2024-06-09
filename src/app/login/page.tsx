import Head from 'next/head'

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>RateXpose Sign In</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/favicon.ico" alt="RateXpose logo" className="w-6 h-6" />
          <span className="ml-2">RateXpose</span>
        </div>
        <div>
          <input type="text" className="p-2 border border-black rounded ml-4" placeholder="Search the community..." />
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
        <div className="text-center mb-5">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <h1 className="text-2xl">Sign In</h1>
        </div>
        <form className="flex flex-col items-center">
          <input type="email" placeholder="Email Address" className="p-2 rounded mb-4 w-full max-w-xs bg-purple-100" />
          <input type="password" placeholder="Password" className="p-2 rounded mb-4 w-full max-w-xs bg-purple-100" />
          <button type="submit" className="p-3 rounded w-full max-w-xs bg-green-200 mb-4">Sign In</button>
        </form>
        <p className="text-center">Don't have an account? <a href="/sign-up" className="text-blue-500">Sign Up Here</a></p>
        <div className="text-center my-4">--------------------- or ---------------------</div>
        <button className="p-3 rounded w-full max-w-xs bg-green-200 flex items-center justify-center">
          <img src="/favicon.ico" alt="Google logo" className="w-6 h-6 mr-2" />
          Sign in with Google
        </button>
      </main>

      <footer className="bg-purple-200 p-4 text-center mt-20">
      <div>
        <a href="/landing" className="text-black">RateXpose</a> | <a href="/contact-us" className="text-black">Contact Us</a>
      </div>
      </footer>
    </div>
  )
}
