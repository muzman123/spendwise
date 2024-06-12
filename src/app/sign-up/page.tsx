import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>RateXpose Sign Up</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>
      <Header />

      <main className="flex flex-col items-center mt-20">
        <div className="text-center mb-5">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <h1 className="text-2xl">Sign Up</h1>
        </div>
        <form className="flex flex-col items-center">
          <input type="email" placeholder="Email Address" className="p-2 rounded mb-4 w-full max-w-xs bg-purple-100" />
          <input type="password" placeholder="Password" className="p-2 rounded mb-4 w-full max-w-xs bg-purple-100" />
          <input type="password" placeholder="Confirm Password" className="p-2 rounded mb-4 w-full max-w-xs bg-purple-100" />
          <button type="submit" className="p-3 rounded w-full max-w-xs bg-green-200 mb-4">Sign Up</button>
        </form>
        <p className="text-center">Already have an account? <a href="/login" className="text-blue-500">Sign In Here</a></p>
      </main>

      <Footer />
    </div>
  )
}
