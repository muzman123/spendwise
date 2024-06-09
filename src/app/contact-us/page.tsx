import Layout from '../layout'
import Head from 'next/head'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact Us | RateXpose</title>
      </Head>
      <header className="bg-purple-200 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/favicon.ico" alt="RateXpose logo" width={24} height={24} />
          <span className="ml-2">RateXpose</span>
        </div>
        <div className="flex-grow mx-4">
          <input type="text" className="p-2 border border-black rounded w-full" placeholder="Search by provider, or company..." />
        </div>
        <nav className="flex space-x-4">
        <a href="/landing" className="text-black">Home</a>
          <a href="/about" className="text-black">About</a>
          <a href="/blog" className="text-black">Blog</a>
          <a href="/post-bill" className="text-black">Post Bill</a>
          <a href="/login" className="text-black">Login/Signup</a>
        </nav>
      </header>

      <main className="mt-10 px-10">
        <section>
          <h1 className="text-4xl text-center mb-10">Contact Us</h1>
          <div className="bg-purple-100 p-6 rounded-lg text-lg mb-20">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-black rounded" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-black rounded" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea id="message" className="w-full p-2 border border-black rounded" rows={5} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="bg-green-200 text-black p-2 rounded">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-200 p-4 text-center mt-20">
      <div>
        <a href="/landing" className="text-black">RateXpose</a> | <a href="/contact-us" className="text-black">Contact Us</a>
      </div>

      </footer>
    </Layout>
  )
}

export default ContactPage
